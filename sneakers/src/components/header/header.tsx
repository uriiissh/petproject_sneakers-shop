import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import cart from "./images/cart.svg";
import fav from "./images/fav.svg";
import { BsFillBasket2Fill, BsFillHeartFill } from "react-icons/bs";
import { IconContext } from "react-icons";

export const Header = () => {
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
          <Link className={styles.link} to="/cart">
            <IconContext.Provider value={{ size: "1.5em" }}>
              <div>
                <BsFillBasket2Fill />
              </div>
            </IconContext.Provider>
          </Link>
          <Link className={styles.link} to="/fav">
            <IconContext.Provider value={{ size: "1.5em" }}>
              <div>
                <BsFillHeartFill />
              </div>
            </IconContext.Provider>
          </Link>
        </div>
      </div>
    </div>
  );
};
