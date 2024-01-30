// ** React Imports
import { ReactNode, useEffect } from "react"

// ** React Router Imports
import { useNavigate } from "react-router-dom"

// ** Axios Imports
import { AxiosResponse, AxiosError } from "axios"

// ** API Instances Imports
import { SPOTIFY_ACCOUNTS_API, SPOTIFY_API } from "../../utils/API"

// ** Utils Imports
import handleUnauthorized from "../../utils/handleUnauthorized"

// ** Toast Imports
import toast from "react-hot-toast"

// ** Axios Interfaces
interface AxiosInterceptorProps {
  children: ReactNode
}

const AxiosInterceptor: React.FC<AxiosInterceptorProps> = ({ children }) => {
  // ** Hooks
  const navigate = useNavigate()

  useEffect(() => {
    // Proceed with success calls
    const resInterceptor = (response: AxiosResponse) => {
      return response
    }

    // Check for error calls
    const errInterceptor = (error: AxiosError) => {
      // Unauthorized case
      if (error.response && error.response.status === 401) {
        // Redirect to login if unauthorized
        handleUnauthorized(navigate)
      } else {
        toast.error("Something went wrong")
      }
      // Pass the error
      return Promise.reject(error)
    }

    const interceptor: number = SPOTIFY_API.interceptors.response.use(
      resInterceptor,
      errInterceptor
    )
    const accountsInterceptor: number =
      SPOTIFY_ACCOUNTS_API.interceptors.response.use(
        resInterceptor,
        errInterceptor
      )

    return () => {
      SPOTIFY_API.interceptors.response.eject(interceptor)
      SPOTIFY_ACCOUNTS_API.interceptors.response.eject(accountsInterceptor)
    }
  }, [])

  return <>{children}</>
}

export default AxiosInterceptor
