// ** React Router Imports
import { BrowserRouter, Route, Routes } from "react-router-dom"

// ** Global Styles Imports
import "./App.css"

// ** Component Imports
import AxiosInterceptor from "./@core/components/axios-interceptor"

// ** Pages Imports
import Browse from "./pages/Browse"
import Login from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
      <AxiosInterceptor>
        <Routes>
          <Route path="/" Component={Browse} />
          <Route path="/login" Component={Login} />
        </Routes>
      </AxiosInterceptor>
    </BrowserRouter>
  )
}

export default App
