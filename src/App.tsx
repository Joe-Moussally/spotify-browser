// ** React Imports
import { useEffect } from "react"

// ** React Router Imports
import { BrowserRouter, Route, Routes } from "react-router-dom"

// ** Global Styles Imports
import "./App.css"

// ** Utils Imports
import checkToken from "./@core/utils/checkToken"

// ** Pages Imports
import Login from "./pages/Login"
import Browse from "./pages/Browse"

function App() {
  useEffect(() => {
    checkToken() // Check for token on app load
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Browse} />
        <Route path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
