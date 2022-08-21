import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  logged: false,
}

export const loginReducer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => void(state.logged = action.payload),
    logout: (state, action) => void(state.logged = action.payload)
  }
})

export const { login, logout } = loginReducer.actions

export default loginReducer.reducer