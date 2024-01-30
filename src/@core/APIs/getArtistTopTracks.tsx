// ** API Imports
import { SPOTIFY_API } from "../utils/API"

// ** Interfaces Imports
import {
  getArtistByIdInterface,
  getArtistTopTracksInterface
} from "../interfaces/artists"

interface getArtistByIdParams {
  id: string
}

export const _getArtistTopTracks = (
  params: getArtistByIdParams,
  callback: (data: getArtistTopTracksInterface | null) => void,
  callbackErr: (data: any) => void
) => {
  SPOTIFY_API.get(`/artists/${params.id}/top-tracks?market=US`)
    .then(function ({ data }: { data: getArtistTopTracksInterface }): void {
      callback(data)
    })
    .catch(function (error) {
      callbackErr(error)
    })
}
