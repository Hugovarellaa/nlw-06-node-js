import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Heading } from "../components/Heading";
import { Separador } from "../components/Separador";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <Separador />
      <Heading text="Vamos nessa?" />
      <Heading text="Então escolha seu continente" mb={["5", "14"]} />
    </>
  );
}
