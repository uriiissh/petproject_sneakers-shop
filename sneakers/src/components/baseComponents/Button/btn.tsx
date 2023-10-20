import styles from "./btn.module.scss";


export const Button = ({children}:{children:string}) => {
  return(
    <div>
      <div className={styles.btn}>{children}</div>
    </div>
  )
}