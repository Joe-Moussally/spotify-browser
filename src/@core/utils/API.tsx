// ** Axios Imports
import axios from "axios"

// ** API Constants
const accountsBaseURL = "https://accounts.spotify.com"
const apiBaseURL = "https://api.spotify.com"
const token = "8284e4d665f94b04975eee1cefc6674e"

export const SPOTIFY_ACCOUNTS_API = axios.create({
  baseURL: accountsBaseURL
  // headers: { Authorization: `Bearer ${token}` }
})
