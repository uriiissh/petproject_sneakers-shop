import { createSlice } from "@reduxjs/toolkit";

const initialState: { name: string; id: string }[] =
  JSON.parse(localStorage.getItem("goods")) || [];

export const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    addGoods: (state, { payload: goods }) => {
      state.push(goods);
      localStorage.setItem("goods", JSON.stringify(state));
    },
    deleteGoods: (state, { payload: goods }) => {
      const delGood = state.filter((g) => g.id !== goods.id);
      localStorage.setItem("goods", JSON.stringify(delGood));
      return delGood
    },
  },
});

export const { actions, reducer } = goodsSlice;
