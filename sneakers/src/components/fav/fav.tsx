import { useFavorites } from "src/hooks/useFavorites";
import styles from "./fav.module.scss";
import { Title, Card } from "../baseComponents";
import { useActions } from "src/hooks/useActions";

export const Favorites = () => {
  const { favorites } = useFavorites();
  const { addGoods } = useActions();
  const list = localStorage.getItem("favorites");

  return (
    <div className={styles.container}>
      <Title>Избранное</Title>
      <div className={styles.favcards}>
        {(JSON.parse(list) || []).length ? (
          favorites?.map((sneaker: any) => (
            <Card key={sneaker.id} sneaker={sneaker}>
              <button onClick={() => addGoods(sneaker)}   className={styles.cartbtn}>Добавить в корзину</button>
            </Card>
          ))
        ) : (
          <p>Тут пусто:(</p>
        )}
      </div>
    </div>
  );
};
