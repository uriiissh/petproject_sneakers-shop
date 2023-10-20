import { useFavorites } from "src/hooks/useFavorites";
import { FavItem } from "./FavItem/favItem";
import styles from "./fav.module.scss";
import { Title } from "../baseComponents";

export const Favorites = () => {
  const { favorites } = useFavorites();
  const list = localStorage.getItem("favorites");

  return (
    <div className={styles.container}>
      <div className={styles.favcards}>
      <Title>Избранное</Title>
        {(JSON.parse(list) || []).length ? (
          favorites?.map((fav: any) => <FavItem key={fav.id} fav={fav} />)
        ) : (
          <p>Тут пусто:(</p>
        )}
      </div>
    </div>
  );
};
