import styles from "./ProductCards.module.scss";

export interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  discountPrice: number;
  obs: string;
}

export const toMoney = (value: number) =>
  new Intl.NumberFormat("pt-br", { currency: "BRL", style: "currency" }).format(
    value
  );

export default ({
  image,
  title,
  price,
  discountPrice,
  obs,
}: ProductCardProps) => (
  <div className={styles.cardVitrine}>
    <img src={image} alt="" />
    <h3>{title}</h3>
    <p>
      <s>{toMoney(price)}</s>
    </p>
    <p>
      <b>{toMoney(discountPrice)}</b>
    </p>
    <p>{obs}</p>
    <span>Frete grátis</span>
    <button>COMPRAR</button>
  </div>
);
