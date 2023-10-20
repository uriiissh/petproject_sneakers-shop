import { createSlice } from "@reduxjs/toolkit";

const initialState: {name:string, id: string}[] = JSON.parse(localStorage.getItem('favorites')) || [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: sneaker }) => {
      const isExists = state.some((s) => s.id === sneaker.id);

      if (isExists) {
        const index = state.findIndex((item) => item.id === sneaker.id);
        if (index !== -1) {
          state.splice(index, 1);
          localStorage.setItem('favorites', JSON.stringify(state))
        }
      } else {
        state.push(sneaker);
        localStorage.setItem('favorites', JSON.stringify(state))
      }
    },
  },
});

export const { actions, reducer } = favoritesSlice;
