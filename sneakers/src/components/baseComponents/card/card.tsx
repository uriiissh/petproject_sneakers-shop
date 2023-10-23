import styles from "./card.module.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useFavorites } from "../../../hooks/useFavorites";
import { useActions } from "src/hooks/useActions";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

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
      <div className={styles.btn}>{children}</div>
    </div>
  );
};
