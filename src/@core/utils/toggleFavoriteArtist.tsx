/**
 *
 * @param id Function that handles adding and removing artists favorite locally
 * @returns boolean
 * returns true or false if the artist is favorited or not
 */
const toggleFavoriteArtist = (id: string) => {
  // Get the value from local storage
  const favorites: string | null = localStorage.getItem("favorites")

  // If no favorite exists in localStorage
  if (!favorites) {
    // Add the new artist locally
    localStorage.setItem("favorites", JSON.stringify({ artists: [id] }))
    return true
  } else {
    // Favorites JSON Object
    const favoritesJSON: { artists: string[] } = JSON.parse(favorites)

    // Check if the artist id in the array
    if (favoritesJSON.artists.includes(id)) {
      // Remove the id and return
      const updatedArray = favoritesJSON.artists.filter((e) => e !== id)

      // Update the local data
      localStorage.setItem(
        "favorites",
        JSON.stringify({ artists: updatedArray })
      )
      return false
    }

    // Add the artist on the end of the array
    const newFavorites: { artists: string[] } = {
      artists: [...favoritesJSON.artists, id]
    }

    // Update the new data in localStorage
    localStorage.setItem("favorites", JSON.stringify(newFavorites))
    return true
  }
}

export default toggleFavoriteArtist
