import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../home/home";
import { Contacts } from "../contacts/contacts";
import { CardDetail } from "../cardDetail/cardDetail";
import { Cart } from "../cart/cart";

export const Router = () => {
  return(
    <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<Contacts/>} path="/contacts"/>
      <Route element={<CardDetail/>} path="/sneakers/:id"/>
      <Route element={<Cart/>} path="/cart"/>
    </Routes>
  )
}