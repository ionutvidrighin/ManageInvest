import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeScreen: {
    id: 1,
    name: 'AppMenu',
    active: true
  }
}

export const screenReducer = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    updateScreen: (state, action) => {
      state.activeScreen = action.payload
    }
  }
})

export const { updateScreen } = screenReducer.actions

export default screenReducer.reducer