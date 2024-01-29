// ** React Imports
import { useEffect, useState } from "react"

// ** Redux Imports
import { RootState } from "../../redux/store"
import { useDispatch, useSelector } from "react-redux"

// ** Actions Imports
import {
  addArtists,
  clearArtists,
  incrementPageCount
} from "../../redux/slices/artistsSlice"

// ** Styles Imports
import styles from "./styles.module.css"

// ** API Imports
import { _getItems } from "../../@core/APIs/getItems"

// ** Utils Imports
import { debounce } from "../../@core/utils/debounce"
import { capitalize } from "../../@core/utils/capitalize"

// ** Icons Imports
import { FaSearch } from "react-icons/fa"

// **Components Imports
import Input from "../../@core/components/input"
import EmptyState from "./components/empty-state"
import InitialState from "./components/initial-state"
import LoadingState from "./components/loading-state"
import ArtistCard from "../../@core/components/artist-card"
import Loader from "../../@core/components/loader"

function Browse() {
  // ** Hooks
  const dispatch = useDispatch()

  // ** Redux States
  const artists = useSelector((state: RootState) => state.artists)

  // ** States
  const [loading, setLoading] = useState<boolean>(false)
  const [fetchMoreLoading, setFetchMoreLoading] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>("")

  // ** Handlers
  const handleSearch = debounce((e) => {
    const query = e.target.value // Input text value
    setSearchValue(query)

    // If the search input is empty -> stop the call and reset called data
    if (!query) {
      dispatch(clearArtists())
      setLoading(false)
      return
    }

    setLoading(true) // Start loading

    // fetch data
    _getItems(
      {
        q: query,
        offset: artists.page * artists.limit,
        type: "artist",
        limit: artists.limit
      },
      (data) => {
        dispatch(addArtists(data))
        setLoading(false) // Stop loading
      },
      (error) => {
        setLoading(false) // Stop loading
      }
    )
  }, 700)

  // Fetch more data
  const fetchMoreData = () => {
    if (!artists.next || fetchMoreLoading) {
      setFetchMoreLoading(false)
      return
    }

    setFetchMoreLoading(true)
    // fetch data
    _getItems(
      {
        q: searchValue,
        offset: artists.page * artists.limit,
        type: "artist",
        limit: artists.limit
      },
      (data) => {
        dispatch(addArtists(data))
      },
      (error) => {}
    )
  }

  // Function that executes at the end of the scroll reach
  const handleScrollEnd = () => {
    // Calculate the distance between the bottom of the viewport and the bottom of the page
    const distanceToBottom =
      document.documentElement.scrollHeight -
      (window.innerHeight + window.scrollY)

    // If the end is reached and the API is not being called
    if (distanceToBottom < 10) {
      if (!fetchMoreLoading) {
        dispatch(incrementPageCount())
      }
      return
    }
  }

  /**
   * Add an event listener to the window to call more
   * artists at the end of the scroll
   */
  useEffect(() => {
    window.addEventListener("scroll", () => handleScrollEnd())

    // Remove event listener on page demount
    return window.removeEventListener("scroll", handleScrollEnd)
  }, [])

  /**
   * On page incrementation, fetch more data
   */
  useEffect(() => {
    fetchMoreData()
  }, [artists.page])

  return (
    <div>
      <div className={styles.searchContainer}>
        <Input
          onChange={handleSearch}
          placeholder="Search Artists"
          icon={<FaSearch style={{ opacity: "0.4" }} />}
        />
      </div>

      <div>
        {loading ? (
          <LoadingState />
        ) : artists.items.length ? (
          <div className={styles.gridContainer}>
            {artists.items.map((artist) => (
              <ArtistCard
                key={artist.id}
                name={artist.name}
                artistId={artist.id}
                followers={artist.followers.total}
                externalURL={artist.external_urls.spotify ?? ""}
                imgURL={artist.images.length ? artist.images[0].url : ""}
                genres={artist.genres.map((genre: string) => capitalize(genre))}
              />
            ))}
          </div>
        ) : searchValue ? (
          <EmptyState />
        ) : (
          <InitialState />
        )}
      </div>

      {/* Fetch More Loader */}
      {fetchMoreLoading && (
        <div className={styles.loaderContainer}>
          <Loader size={100} />
        </div>
      )}
    </div>
  )
}

export default Browse
