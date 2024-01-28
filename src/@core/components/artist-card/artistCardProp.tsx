export interface ArtistCardProps {
  /**
   * The ID of the artist (Provided by spotify)
   */
  artistId: string
  /**
   * The name of the artist/band
   */
  name: string
  /**
   * A url link to the image of the artist
   */
  imgURL?: string
  /**
   * A url link linking to an external webpage for the artist
   */
  externalURL?: string
  /**
   * The number of the followers for the artist
   */
  followers: number
  /**
   * An array of genres of the artist's music
   * @default []
   */
  genres?: string[]
}
