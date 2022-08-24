import { configureStore } from '@reduxjs/toolkit'
import appStartReducer from './appStartReducer'
import screenReducer from './activeScreenReducer'

export const store = configureStore({
  reducer: {
    appStart: appStartReducer,
    screen: screenReducer
  }
})