import { createSlice } from "@reduxjs/toolkit";

const initialState: {name:string, id: string}[] = JSON.parse(localStorage.getItem('goods')) || [];

export const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    toggleGoods: (state, { payload: goods }) => {
      const isExists = state.some((g) => g.id === goods.id);

      if (isExists) {
        const index = state.findIndex((item) => item.id === goods.id);
        if (index !== -1) {
          state.splice(index, 1);
          localStorage.setItem('goods', JSON.stringify(state))
        }
      } else {
        state.push(goods);
        localStorage.setItem('goods', JSON.stringify(state))
      }
    },
  },
});

export const { actions, reducer } = goodsSlice;
