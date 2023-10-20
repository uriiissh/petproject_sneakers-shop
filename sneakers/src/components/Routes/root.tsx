import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Contacts, CardDetail, Cart, Favorites } from '../index';

export const Router = () => {
  return(
    <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<Contacts/>} path="/contacts"/>
      <Route element={<CardDetail/>} path="/sneakers/:id"/>
      <Route element={<Cart/>} path="/cart"/>
      <Route element={<Favorites/>} path="/fav"/>
    </Routes>
  )
}