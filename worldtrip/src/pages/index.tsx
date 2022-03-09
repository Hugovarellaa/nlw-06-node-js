import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Separador } from "../components/Separador";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes/>
      <Separador/>
    </>
  );
}
