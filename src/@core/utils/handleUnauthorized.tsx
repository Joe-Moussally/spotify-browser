// ** React Router Imports
import { NavigateFunction } from "react-router-dom"

// ** Toast Imports
import toast from "react-hot-toast"

const handleUnauthorized = (navigate: NavigateFunction) => {
  // Show toast error
  toast.error("Please Log In To Proceed")

  // Navigate to login
  navigate("/login")
}

export default handleUnauthorized
