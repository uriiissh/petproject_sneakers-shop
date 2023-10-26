import styles from "./card.module.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useFavorites } from "../../../hooks/useFavorites";
import { useActions } from "src/hooks/useActions";
import { Link } from "react-router-dom";
import { ReactNode, useState } from "react";
import { Modal } from "../Modal/modal";

export const Card = ({
  sneaker,
  children,
}: {
  sneaker: { img: string; name: string; price: string; id: string };
  children?: ReactNode;
}) => {
  const { toggleFavorites } = useActions();

  const { favorites } = useFavorites();

  const isExist = favorites.some((s: { id: string }) => s.id === sneaker.id);
  const [modalActive, setModalActive] = useState(false);

  console.log(favorites);

  return (
    <div className={styles.cardcontainer}>
      <div key={sneaker?.id} className={styles.card}>
        <img src={sneaker?.img} alt="" />
        <button className={styles.fav} onClick={() => toggleFavorites(sneaker)}>
          {isExist ? (
            <AiFillHeart fontSize={30} />
          ) : (
            <AiOutlineHeart fontSize={30} />
          )}
        </button>
        <Link className={styles.link} to={`/sneakers/${sneaker.id}`}>
          <div className={styles.desciption}>
            <div className={styles.name}>{sneaker?.name}</div>
            <div className={styles.price}>{sneaker?.price} ₽</div>
          </div>
        </Link>
      </div>
      <div onClick={() =>  setModalActive(true)} className={styles.btn}>{children}</div>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>Товар добавлен в корзину</p>
      </Modal>
    </div>
  );
};
