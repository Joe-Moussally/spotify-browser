// ** API Imports
import { SPOTIFY_API } from "../utils/API"

export const _getItems = (
  params: any,
  callback: (data: any) => void,
  callbackErr: (data: any) => void
) => {
  SPOTIFY_API.get("/search", { params })
    .then(function ({ data }) {
      callback(data)
    })
    .catch(function (error) {
      callbackErr(error.response.data)
    })
}
