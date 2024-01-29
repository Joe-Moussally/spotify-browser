// ** React Router Imports
import { NavigateFunction } from "react-router-dom"

const handleUnauthorized = (navigate: NavigateFunction) => {
  // Navigate to login
  navigate("/login")
}

export default handleUnauthorized
