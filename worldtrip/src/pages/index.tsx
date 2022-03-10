import { GetStaticProps } from "next";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Heading } from "../components/Heading";
import { Separador } from "../components/Separador";
import { Slider } from "../components/Slider";
import { TravelTypes } from "../components/TravelTypes";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";
import Loading from "../components/Loading";

export interface ContinentProps {
  continents: {
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[];
}

export default function Home({ continents }: ContinentProps) {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <Separador />
      <Heading text="Vamos nessa?" />
      <Heading text="Então escolha seu continente" mb={["5", "14"]} />
      <Slider continents={continents} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query<any>([
    Prismic.predicates.at("document.type", "continent"),
  ]);

  const continents = response.results.map((continent) => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      summary: continent.data.summary,
      image: continent.data.slider_image.url,
    };
  });

  return {
    props: { continents },
    revalidate: 60 * 60 * 24 * 30, //30 days
  };
};
