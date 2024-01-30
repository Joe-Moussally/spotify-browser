// ** API Imports
import { SPOTIFY_API } from "../utils/API"

// ** Interfaces Imports
import { getArtistByIdInterface } from "../interfaces/artists"

interface getArtistByIdParams {
  id: string
}

export const _getArtistById = (
  params: getArtistByIdParams,
  callback: (data: getArtistByIdInterface | null) => void,
  callbackErr: (data: any) => void
) => {
  SPOTIFY_API.get(`/artists/${params.id}`)
    .then(function ({ data }: { data: getArtistByIdInterface }): void {
      callback(data)
    })
    .catch(function (error) {
      callbackErr(error)
    })
}
