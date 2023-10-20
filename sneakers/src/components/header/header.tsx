import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { useFavorites } from "../../hooks/useFavorites";

export const Header = () => {
  const { favorites } = useFavorites();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link className={styles.link} to="/">
          <div className={styles.name}>Sneak Shop</div>
        </Link>
        <div className={styles.nav}>
          <div className={styles.navbtn}>Новинки</div>
          <div className={styles.navbtn}>Мужские</div>
          <div className={styles.navbtn}>Женские</div>
          <div className={styles.navbtn}>Акссесуары</div>
          <Link className={styles.link} to="/contacts">
            <div className={styles.navbtn}>Контакты</div>
          </Link>
        </div>
        <div className={styles.icons}>
          <Link to="/cart">
            <FaShoppingCart fontSize={30} color={"black"} />
          </Link>
          <Link to="/fav">
            <FaRegHeart fontSize={30} color={"black"} />
            <div
              className={
                favorites.length === 0 ? styles.counter_empty : styles.counter
              }
            >
              {favorites.length}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
