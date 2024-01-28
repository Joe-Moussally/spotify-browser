import { useEffect } from "react"
import Button from "../../@core/components/button"
import { FaBeer } from "react-icons/fa"

function Browse() {
  useEffect(() => {
    // API.get()
  }, [])

  return (
    <div style={{ margin: "200px" }}>
      <Button endIcon={<FaBeer color="var(--spotify-primary)" />}>
        PRESS ME
      </Button>
    </div>
  )
}

export default Browse
