import {configureStore} from "@reduxjs/toolkit"
import darkThemSlice from "./slices/darkTheme"


export const store = configureStore({
  reducer: {
    darkTheme: darkThemSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch