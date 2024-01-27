// ** Axios Imports
import axios from "axios"

// ** API Constants
const baseURL = "https://api.spotify.com"
const token = "8284e4d665f94b04975eee1cefc6674e"

export const API = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${token}` }
})
