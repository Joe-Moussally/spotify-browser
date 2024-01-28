// ** React Router Imports
import { BrowserRouter, Route, Routes } from "react-router-dom"

// ** Global Styles Imports
import "./App.css"

// ** Pages Imports
import Login from "./pages/Login"
import Browse from "./pages/Browse"

function App() {
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
