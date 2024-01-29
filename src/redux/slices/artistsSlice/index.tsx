// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import ArtistInterface from "../../../@core/interfaces/artistInterface"

// ** Interfaces
export interface artistsState {
  page: number
  limit: number
  canFetchMore: boolean
  data: ArtistInterface[]
}

// ** Initial States
const initialState: artistsState = {
  page: 0,
  limit: 8,
  canFetchMore: true,
  data: []
}

// ** Slice
export const artistsSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {
    // Add new batch of artists the data array
    addArtists: (state, action: PayloadAction<ArtistInterface[]>) => {},

    // Increment the page count
    incrementPageCount: (state) => {},

    // Clear/Reset state
    clearArtists: (state) => {} // Fixed typo here

    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // }
  }
})

export const { addArtists, incrementPageCount, clearArtists } =
  artistsSlice.actions

export default artistsSlice.reducer
