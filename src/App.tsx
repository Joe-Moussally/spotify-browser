import Button from "./@core/components/button"
import { FaBeer } from "react-icons/fa"

import "./App.css"

function App() {
  return (
    <div style={{ margin: "200px" }}>
      <Button endIcon={<FaBeer color="var(--spotify-primary)" />}>
        PRESS ME
      </Button>
    </div>
  )
}

export default App
