import styles from "./Header.module.scss";

export default () => (
  <div className={styles.center}>
    <div className={styles.headerLogo}>
      <img src="./assets/Group 404.webp" alt="VTEX Logo" />
    </div>
    <div className={styles.headerSearch}>
      <input type="text" placeholder="O que você está procurando?" />
      <img src="./assets/MagnifyingGlass.webp" alt="Lupa" />
    </div>
    <div className={styles.headerIcon}>
      <div className={styles.headerIconInfo}>
        <img src="./assets/Group.webp" alt="" />
      </div>
      <div className={styles.headerIconInfo}>
        <img src="./assets/Heart.webp" alt="" />
      </div>
      <div className={styles.headerIconInfo}>
        <img src="./assets/UserCircle.webp" alt="" />
      </div>
      <div className={styles.headerIconInfo}>
        <img src="./assets/ShoppingCart.webp" alt="" />
      </div>
    </div>
  </div>
);
