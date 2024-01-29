// ** React Imports
import { useEffect, useState } from "react"

// ** API Imports
import { _getItems } from "../../@core/APIs/getItems"

// ** Utils Imports
import { debounce } from "../../@core/utils/debounce"

// ** Icons Imports
import { FaSearch } from "react-icons/fa"

// **Components Imports
import EmptyState from "./components/empty-state"
import ArtistCard from "../../@core/components/artist-card"
import Input from "../../@core/components/input"

function Browse() {
  // ** States
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    limit: 8,
    canFetchMore: true
  }) // Pagination
  const [loading, setLoading] = useState<boolean>(false)
  const [params, setParams] = useState({
    q: "",
    offset: paginationModel.page * paginationModel.limit
  })
  const [data, setData] = useState({})

  // ** Handlers
  const handleSearch = debounce((e) => {
    setLoading(true) // Start loading
    const query = e.target.value // Input text value

    // If the search input is empty -> stop the call
    if (!query) return

    // fetch data
    _getItems(
      params,
      (data) => {
        console.log(data)
        setLoading(false) // Stop loading
      },
      (error) => {
        console.log(error)
        setLoading(false) // Stop loading
      }
    )
  }, 700)

  // Function that executes at the end of the scroll reach
  const fetchMoreData = () => {
    // Calculate the distance between the bottom of the viewport and the bottom of the page
    const distanceToBottom =
      document.documentElement.scrollHeight -
      (window.innerHeight + window.scrollY)

    // If the end is reached and the API is not being called
    if (distanceToBottom < 1 && !loading) {
      console.log(distanceToBottom)
      return
    }
  }

  useEffect(() => {
    // _getItems(
    //   params,
    //   (data) => console.log(data),
    //   (error) => console.log(error)
    // )
  }, [params])

  // Add an event listener to the window to call more
  // artists at the end of the scroll
  useEffect(() => {
    window.addEventListener("scroll", () => fetchMoreData())

    // Remove event listener on page demount
    return window.removeEventListener("scroll", fetchMoreData)
  }, [])

  return (
    <div style={{ height: "2000px" }}>
      <div
        style={{
          // border: "2px red solid",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "300px"
        }}
      >
        <Input
          icon={<FaSearch style={{ opacity: "0.4" }} />}
          placeholder="Search Artists"
        />
      </div>

      <div style={{ margin: "100px" }}>
        {/* <ArtistCard
          artistId="1"
          name="Coldplay"
          imgURL="https://i.scdn.co/image/ab67616100005174989ed05e1f0570cc4726c2d3"
          followers={45723432}
          genres={[capitalize("rap"), capitalize("hip-hop")]}
          externalURL="https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU"
        /> */}

        <EmptyState />
      </div>
    </div>
  )
}

export default Browse
