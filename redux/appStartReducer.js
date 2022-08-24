import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  start: false,
}

export const appStartReducer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    startApp: (state, action) => void(state.start = action.payload),
    stopApp: (state, action) => void(state.start = action.payload)
  }
})

export const { startApp, stopApp } = appStartReducer.actions

export default appStartReducer.reducer