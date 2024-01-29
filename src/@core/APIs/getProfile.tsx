// ** API Imports
import { SPOTIFY_API } from "../utils/API"

export const _getProfile = (
  callback?: (data: any) => void,
  callbackErr?: (data: any) => void
) => {
  SPOTIFY_API.get("/me", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  })
    .then(function ({ data }) {
      callback && callback(data)
    })
    .catch(function (error) {
      callbackErr && callbackErr(error)
    })
}
