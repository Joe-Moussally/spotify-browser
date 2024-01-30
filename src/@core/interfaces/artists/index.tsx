export interface getArtistsDataInterface {
  artists: {
    items: ArtistInterface[]
    limit: number
    next: string
    offset: number
    previous?: string
    total: number
  }
}

export interface getArtistByIdInterface {
  external_urls: {
    spotify: string
  }
  followers: {
    href: string
    total: number
  }
  genres: string[]
  href: string
  id: string
  images: [
    {
      url: string
    }
  ]
  name: string
  popularity: number
}

export interface getArtistTopTracksInterface {
  tracks: {
    id: string
    name: string
    href: string
    preview_url: string
    album: {
      images: { url: string }[]
      name: string
      release_date: string
    }
  }[]
}

export interface ArtistInterface {
  id: string
  href: string
  followers: { total: number }
  genres: string[]
  images: { height: number; width: number; url: string }[]
  name: string
  external_urls: { spotify?: string }
}
