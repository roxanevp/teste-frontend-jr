import styles from "./Header.module.scss";

export default () => (
  <div className={styles.headerInfo}>
    <div className={styles.headerInfoItem}>
      <img
        src="/assets/ShieldCheck.webp"
        alt="Ícone escudo remete a segurança"
      />
      <p>
        Compra <b>100% Segura</b>
      </p>
    </div>

    <div className={styles.headerInfoItem}>
      <img src="/assets/Truck.webp" alt="" />
      <p>
        <b>Frete grátis</b> acima de R$200
      </p>
    </div>

    <div className={styles.headerInfoItem}>
      <img src="/assets/CreditCard.webp" alt="" />
      <p>
        <b>Parcele</b> suas compras
      </p>
    </div>
  </div>
);
