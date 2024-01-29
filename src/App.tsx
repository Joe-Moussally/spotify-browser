// ** React Router Imports
import { BrowserRouter, Route, Routes } from "react-router-dom"

// ** Global Styles Imports
import "./App.css"

// ** Component Imports
import AxiosInterceptor from "./@core/components/axios-interceptor"

// ** Pages Imports
import Browse from "./pages/Browse"
import Login from "./pages/Login"

// ** Redux Imports
import { store } from "./redux/store"
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AxiosInterceptor>
          <Routes>
            <Route path="/" Component={Browse} />
            <Route path="/login" Component={Login} />
          </Routes>
        </AxiosInterceptor>
      </BrowserRouter>
    </Provider>
  )
}

export default App
