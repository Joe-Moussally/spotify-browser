/**
 * Function that checks if the artist is favorite
 * Returns a boolean
 */
const checkArtistIsFavorite = (id: string) => {
  // Check if favorites exists in localStoragee
  const favorites: string | null = localStorage.getItem("favorites")

  // If no favorites -> return false
  if (!favorites) return false

  // Parse the data as JSON
  const favoritesJSON: { artists: string[] } = JSON.parse(favorites)

  // Return a boolean based on if the id is in localStorage
  return favoritesJSON.artists.includes(id)
}

export default checkArtistIsFavorite
