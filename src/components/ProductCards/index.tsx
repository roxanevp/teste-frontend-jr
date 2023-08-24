"use client";

import { useState, useEffect } from "react";
import ProductCard, { toMoney, ProductCardProps } from "./ProductCard";
import styles from "./ProductCards.module.scss";

const url =
  "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

interface Product {
  photo: string;
  productName: string;
  price: number;
}

const mapProducts = (products: Product[]): ProductCardProps[] =>
  products.map((item) => ({
    image: item.photo,
    title: item.productName,
    price: item.price,
    discountPrice: item.price * 0.85, // 15% de desconto
    obs: `ou 2x de ${toMoney(item.price / 2)} sem juros`,
  }));

export default () => {
  const [products, setProducts] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(({ products: items }) => setProducts(mapProducts(items)));
  }, []);

  return (
    <div className={styles.cardsVitrine}>
      {products.map((product) => (
        <ProductCard
          image={product.image}
          title={product.title}
          price={product.price}
          discountPrice={product.discountPrice}
          obs={product.obs}
        />
      ))}
    </div>
  );
};
