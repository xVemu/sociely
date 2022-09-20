import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface DarkThemeState {
  value: boolean
}

const initialState: DarkThemeState = {
  value: false,
}

export const darkThemSlice = createSlice({
  name: 'darkTheme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = !state.value
    },
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
    setDarkTheme: (state) => {
      state.value = true
    },
    setLightTheme: (state) => {
      state.value = false
    }
  },
})

export const {setLightTheme, setTheme, setDarkTheme, toggleTheme} = darkThemSlice.actions

export default darkThemSlice.reducer