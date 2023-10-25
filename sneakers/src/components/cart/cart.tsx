import styles from "./cart.module.scss";
import { useGoods } from "src/hooks/useGoods";
import { CartItem } from "./cartItems/cartItem";
import { Title } from "../baseComponents";


export const Cart = () =>{
  const { goods } = useGoods();

  const listGoods = localStorage.getItem("goods");



  return(
    <div className={styles.container}>
      <Title>Корзина</Title>
      <div className={styles.content}>
      {(JSON.parse(listGoods) || []).length ? (
          goods?.map((sneaker: any) => (
            <CartItem key={sneaker.id} sneaker={sneaker}>
              <button className={styles.cartbtn}>Добавить в корзину</button>
            </CartItem>
          ))
        ) : (
          <p>Тут пусто:(</p>
        )}
      </div>
    </div>
  )
}