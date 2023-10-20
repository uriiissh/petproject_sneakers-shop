import styles from "./title.module.scss";


export const Title = ({children}:{children:string}) => {
  return(
    <div className={styles.title}>{children}</div>
  )
}