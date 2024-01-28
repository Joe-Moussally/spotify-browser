// ** React Imports
import { useEffect, useState } from "react"

// ** API Imports
import { _getItems } from "../../@core/APIs/getItems"
import { debounce } from "../../@core/utils/debounce"
import { FaSearch } from "react-icons/fa"
import ArtistCard from "../../@core/components/artist-card"
import { capitalize } from "../../@core/utils/capitalize"

function Browse() {
  // ** States
  const [params, setParams] = useState({
    q: "",
    type: ""
  })
  const [data, setData] = useState({})

  // ** Handlers
  const handleSearch = debounce((e) => {
    const query = e.target.value

    const params = {
      q: query,
      type: "artist"
    }
    // _getItems(
    //   params,
    //   (data) => console.log(data),
    //   (error) => console.log(error)
    // )
    console.log(query)
  }, 700)

  useEffect(() => {
    // _getItems(
    //   params,
    //   (data) => console.log(data),
    //   (error) => console.log(error)
    // )
  }, [])

  return (
    <div>
      <div
        style={{
          border: "2px red solid",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "300px"
        }}
      >
        <div
          className="innerShadowBox"
          style={{
            width: "fit-content",
            padding: "11px 27px 10px 27px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px"
          }}
        >
          <FaSearch style={{ opacity: "0.4" }} />
          <input
            placeholder="Search Artists"
            style={{
              border: "none",
              background: "none",

              opacity: "0.7"
            }}
            type="text"
            onChange={handleSearch}
          />
        </div>
      </div>

      <div style={{ margin: "100px" }}>
        <ArtistCard
          artistId="1"
          name="Coldplay"
          imgURL="https://i.scdn.co/image/ab67616100005174989ed05e1f0570cc4726c2d3"
          followers={45723432}
          genres={[capitalize("rap"), capitalize("hip-hop")]}
          externalURL="https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU"
        />
      </div>
    </div>
  )
}

export default Browse
