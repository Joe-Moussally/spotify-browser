// ** API Imports
import { SPOTIFY_API } from "../utils/API"

// ** Interfaces Imports
import { getArtistsDataInterface } from "../interfaces/artists"
interface getItemsParams {
  q: string
  offset: number
  limit: number
  type:
    | "artist"
    | "album"
    | "playlist"
    | "track"
    | "show"
    | "episode"
    | "audiobook"
}

export const _getItems = (
  params: getItemsParams,
  callback: (data: getArtistsDataInterface) => void,
  callbackErr: (data: any) => void
) => {
  SPOTIFY_API.get("/search", { params })
    .then(function ({ data }: { data: getArtistsDataInterface }): void {
      callback(data)
    })
    .catch(function (error) {
      callbackErr(error.response.data)
    })
}
