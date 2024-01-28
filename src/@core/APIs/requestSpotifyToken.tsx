// ** API Imports
import { SPOTIFY_ACCOUNTS_API } from "../utils/API"

export const _requestSpotifyToken = (
  callback: (data: any) => void,
  callbackErr: (data: any) => void
) => {
  SPOTIFY_ACCOUNTS_API.post(
    "/api/token",
    {
      grant_type: "client_credentials",
      client_id: "b7c735da46a64a0ab8c4789f307d8d9f",
      client_secret: "8284e4d665f94b04975eee1cefc6674e"
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
