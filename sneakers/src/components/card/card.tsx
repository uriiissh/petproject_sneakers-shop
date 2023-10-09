import styles from "./card.module.scss";
import first from "./images/first.jpg";

export const Card = ({
  sneaker,
}: {
  sneaker: { img: string; name: string; price: string; id: string };
}) => {
  return (
    <div key={sneaker?.id} className={styles.card}>
      <img src={sneaker?.img} alt="" />
      <div className={styles.desciption}>
        <div className={styles.name}>{sneaker?.name}</div>
        <div className={styles.price}>{sneaker?.price}</div>
      </div>
    </div>
  );
};
