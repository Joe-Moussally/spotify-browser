export default interface ArtistInterface {
  id: string
  href: string
  followers: { total: number }
  genres: string[]
  images: { height: number; width: number; url: string }[]
  name: string
  external_urls: { spotify?: string }
}