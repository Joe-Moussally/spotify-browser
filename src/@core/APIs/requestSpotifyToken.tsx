// ** API Imports
import { SPOTIFY_ACCOUNTS_API } from "../utils/API"

export const _requestSpotifyToken = (
  callback: (data: any) => void,
  callbackErr: (data: any) => void
) => {
  const client_id_env = process.env.REACT_APP_SPOTIFY_CLIENT_ID
  const client_secret_env = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET

  SPOTIFY_ACCOUNTS_API.post(
    "/api/token",
    {
      grant_type: "client_credentials",
      client_id: client_id_env,
      client_secret: client_secret_env
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
  )
    .then(function ({ data }) {
      callback(data)
    })
    .catch(function (error) {
      callbackErr(error.response.data)
    })
}
