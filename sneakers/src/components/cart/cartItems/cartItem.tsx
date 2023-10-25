import { ReactNode } from "react";
import styles from "./cartItem.module.scss";
import { ImCross } from 'react-icons/im'
import { useActions } from "src/hooks/useActions";

export const CartItem = ({
  sneaker,
  children,
}: {
  sneaker: { img: string; name: string; price: string; id: string };
  children?: ReactNode;
}) => {

  const { deleteGoods } = useActions();

  return (
    <div className={styles.good}>
      <div className={styles.left}>
        <img src={sneaker?.img} alt="" />
        <div>{sneaker?.name}</div>
      </div>
      <div className={styles.right}>
        <div className={styles.price}>{sneaker?.price} ₽</div>
      </div>
       <button onClick={() => deleteGoods(sneaker)} className={styles.cross}><ImCross/></button>
    </div>
  );
};
