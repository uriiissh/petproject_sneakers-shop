import { configureStore } from '@reduxjs/toolkit'
import { reducer as favoritesReducer } from './favorites/favorites.slice'
import { reducer as goodsReducer} from './goods/goods.slice';

export const store = configureStore({

  reducer: {
    favorites:favoritesReducer,
    goods:goodsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch