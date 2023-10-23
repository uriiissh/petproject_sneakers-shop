import styles from "./btn.module.scss";

export const Button = ({ children, onClick }: { children: string, onClick: () => void }) => {
  return (
    <div>
      <div onClick={onClick} className={styles.btn}>
        {children}
      </div>
    </div>
  );
};
