import { configureStore } from '@reduxjs/toolkit'
import { reducer as favoritesReducer } from './favorites/favorites.slice'

export const store = configureStore({

  reducer: {
    favorites:favoritesReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch