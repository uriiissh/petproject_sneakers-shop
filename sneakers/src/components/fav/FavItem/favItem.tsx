import styles from "./favitem.module.scss";


export const FavItem = ({
  fav
}: {
  fav: { img: string; name: string; price: string; id: string };
}) => {


  return(
    <div className={styles.container}>
      <div className={styles.favcard}>
        <div className={styles.left}>
          <img src={fav?.img} alt=''/>
          {fav?.name}
        </div>
        <div className={styles.right}>
        {fav?.price}
        </div>
      </div>
    </div>

  )
}