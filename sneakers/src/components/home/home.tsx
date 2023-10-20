import { useState, useEffect } from "react";
import { Card } from "../card";
import styles from "./home.module.scss";
import { Title } from "../baseComponents";


export const Home = () => {
  const [sneakers, setSneakers] = useState([]);

  const getSneakersList = async () => {
    const response = await fetch("http://localhost:1337/api/sneakers");
    const data = await response.json();

    setSneakers(
      data.data?.map(
        (element: {
          id: string;
          attributes: { name: string; price: string; img: string };
        }) => ({
          id: element.id,
          name: element.attributes.name,
          img: element.attributes.img,
          price: element.attributes.price,
        })
      )
    );
  };

  useEffect(() => {
    getSneakersList();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title>Каталог</Title>
        <div className={styles.cards}>
          {sneakers.length ? (
            sneakers?.map((sneaker) => (
              <Card key={sneaker.id} sneaker={sneaker} />
            ))
          ) : (
            <p>Что-то пошло не так:(</p>
          )}
        </div>
      </div>
    </div>
  );
};
