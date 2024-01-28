// ** React Imports
import { useState } from "react"

// ** Component Imports
import Button from "../../@core/components/button"

// ** Icons Imports
import { FaSpotify } from "react-icons/fa"

// ** Styles Imports
import styles from "./styles.module.css"

// ** API Imports
import { _requestSpotifyToken } from "../../@core/APIs/requestSpotifyToken"

function Login() {
  // ** States
  const [loading, setLoading] = useState<boolean>(false) // API loading state

  // ** Handlers
  const handleLoginButtonClick = () => {
    setLoading(true) // Start Loading

    // Request Token
    _requestSpotifyToken(
      (data) => {
        localStorage.setItem("token", data.access_token) // Set Token Localy
        setLoading(false) // End Loading

        // Redirect to main page after success call
        window.location.replace("/")
      },
      (error) => {
        setLoading(false) // End Loading
      }
    )
  }

  return (
    <div className={styles.container}>
      <span style={{ transform: "scale(2)" }}>
        <Button
          loading={loading}
          onClick={handleLoginButtonClick}
          endIcon={<FaSpotify size={25} color="var(--spotify-primary)" />}
        >
          LOG IN
        </Button>
      </span>
    </div>
  )
}

export default Login
