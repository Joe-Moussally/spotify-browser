// ** Axios Imports
import axios from "axios"

// ** API Constants
const apiBaseURL = "https://api.spotify.com/v1"
const accountsBaseURL = "https://accounts.spotify.com"

// ** Account API
export const SPOTIFY_ACCOUNTS_API = axios.create({
  baseURL: accountsBaseURL
})

// ** General API
export const SPOTIFY_API = axios.create({
  baseURL: apiBaseURL,
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
})
