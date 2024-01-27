// ** React Router Imports
import { BrowserRouter, Route, Routes } from "react-router-dom"

// ** Global Styles Imports
import "./App.css"

// ** Pages Imports
import Browse from "./pages/Browse"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Browse} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
