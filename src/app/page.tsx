// import img from 'next/img'
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import IconCards from "@/components/IconCards";
import Title from "@/components/Title";
import TabNav from "@/components/TabNav";
import Container from "@/components/Container";
import ProductCards from "@/components/ProductCards";
import PartnersBanners from "@/components/PartnersBanners";
import ProductsBanners from "@/components/ProductsBanners";
import Brands from "@/components/Brands";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Banner />
      
      <IconCards />
      
      <Title text="Produtos Relacionados" />

      <TabNav />
      
      <Container>
        <div>
          <img src="/assets/Vector-esquerda.webp" alt="" />
        </div>

        <ProductCards />

        <div>
          <img src="/assets/Vector-direita.webp" alt="" />
        </div>
      </Container>
      
      <Container>
        <PartnersBanners />
      </Container>

      <Title text="Produtos Relacionados" seeAll />

      <Container>
        <ProductsBanners />
      </Container>

      <Title text="Navegue por marcas" strikes={false} />

      <Container>
        <Brands />
      </Container>
    </div>
  );
}
