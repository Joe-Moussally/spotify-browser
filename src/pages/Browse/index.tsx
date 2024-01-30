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
import { FaPlus, FaSearch } from "react-icons/fa"

// **Components Imports
import Input from "../../@core/components/input"
import EmptyState from "./components/empty-state"
import InitialState from "./components/initial-state"
import LoadingState from "./components/loading-state"
import ArtistCard from "../../@core/components/artist-card"
import Loader from "../../@core/components/loader"
import Button from "../../@core/components/button"

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
    dispatch(clearArtists())
    const query = e.target.value // Input text value
    setSearchValue(query)

    // If the search input is empty -> stop the call and reset called data
    if (!query) {
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

  const handleLoadMoreClick = () => {
    dispatch(incrementPageCount())
  }

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
        setFetchMoreLoading(false)
        dispatch(addArtists(data))
      },
      (error) => {
        setFetchMoreLoading(false)
      }
    )
  }

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

      {/* Fetch More Button */}
      {artists.next && (
        <div className={styles.loaderContainer}>
          <Button
            endIcon={<FaPlus />}
            onClick={handleLoadMoreClick}
            loading={fetchMoreLoading}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  )
}

export default Browse
