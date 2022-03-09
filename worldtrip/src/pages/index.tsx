import { Flex, Heading } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Separador } from "../components/Separador";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <TravelTypes />
      <Separador />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?
        <br />
        então escolha seu continente
      </Heading>
    </Flex>
  );
}
