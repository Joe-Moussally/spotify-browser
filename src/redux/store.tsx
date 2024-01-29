// ** Redux Imports
import { configureStore } from "@reduxjs/toolkit"

// ** Slice Imports
import artistsReducer from "./slices/artistsSlice"

export const store = configureStore({
  reducer: {
    artists: artistsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
