import { useEffect, useState } from "react"
import Button from "../../@core/components/button"
import { FaBeer, FaSpotify } from "react-icons/fa"
import { ACCOUNTS_API } from "../../@core/utils/API"

import styles from "./styles.module.css"

function Login() {
  // ** States
  const [loading, setLoading] = useState<boolean>(false) // API loading state

  useEffect(() => {
    ACCOUNTS_API.post("/api/token", {
      grant_type: "client_credentials"
    })
  }, [])

  return (
    <div className={styles.container}>
      <span style={{ transform: "scale(2)" }}>
        <Button
          endIcon={<FaSpotify size={25} color="var(--spotify-primary)" />}
          loading={loading}
        >
          LOG IN
        </Button>
      </span>
    </div>
  )
}

export default Login
