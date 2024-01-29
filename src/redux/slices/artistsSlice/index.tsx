// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

// ** Interfaces Imports
import {
  ArtistInterface,
  getArtistsDataInterface
} from "../../../@core/interfaces/artists"

// ** Interfaces
export interface artistsState {
  page: number
  limit: number
  total: number
  next: string
  items: ArtistInterface[]
}

// ** Initial States
const initialState: artistsState = {
  page: 0,
  limit: 8,
  total: 0,
  next: "",
  items: []
}

// ** Slice
export const artistsSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {
    // Add new batch of artists the data array
    addArtists: (state, action: PayloadAction<getArtistsDataInterface>) => {
      // ** Payload Data
      const payloadData = action.payload.artists
      console.log(payloadData.next)

      // ** Update state
      state.total = payloadData.total
      state.limit = payloadData.limit
      state.page = payloadData.offset / payloadData.limit
      state.next = payloadData.next
      state.items = [...state.items, ...payloadData.items]
    },

    // Increment the page count
    incrementPageCount: (state) => {
      state.page += 1
    },

    // Clear/Reset state
    clearArtists: (state) => {
      state = initialState
    }
  }
})

export const { addArtists, incrementPageCount, clearArtists } =
  artistsSlice.actions

export default artistsSlice.reducer
