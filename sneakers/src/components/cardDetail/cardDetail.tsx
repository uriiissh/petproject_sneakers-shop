import { useParams } from "react-router-dom";
import styles from "./cardDetail.module.scss";
import { useEffect, useState } from "react";
import { Button } from "../baseComponents";
import { useActions } from "src/hooks/useActions";

export const CardDetail = ({}) => {

  const { toggleGoods } = useActions();

  const { id } = useParams();
  const [card, setCard] = useState<{
    id?: string;
    name?: string;
    price?: string;
    img?: string;
    info?: string;
  }>({});



  const getById = async () => {
    const response = await fetch(`
    http://localhost:1337/api/sneakers/${id}`);
    const data = await response.json();

    setCard({
      id: data.data.id,
      name: data.data.attributes.name,
      price: data.data.attributes.price,
      img: data.data.attributes.img,
      info: data.data.attributes.info,
    });
  };


  useEffect(() => {
    getById();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.cardinfo}>
          <div className={styles.left}>
            <img src={card?.img} alt="" />
          </div>
          <div className={styles.right}>
            <div className={styles.title}>
            <div className={styles.name}>{card?.name}</div>
            <div className={styles.price}>{card?.price} ₽</div>
            </div>
            <div className={styles.info}> {card?.info}</div>
            <Button onClick={() => toggleGoods(card)}>Добавить в корзину</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
