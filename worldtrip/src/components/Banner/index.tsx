/* eslint-disable jsx-a11y/alt-text */
import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      width="100%"
      height={["163px", "250px", "335px"]}
      bgImage="url('/banner.jpg')"
      bgPosition={["100 20%", "100% 20%", "100% 30%"]}
      bgRepeat="no-repeat"
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        width="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <div>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={["xl", "2lx", "2xl", "2xl", "4xl"]}
          >
            5 continents, <br />
            infinitas poibilidades.
            <Text
              color="gray.300"
              mt="5"
              fontSize={["0.8rem", "xl"]}
              maxWidth={["100%", "100%", "100%", "550px"]}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou
            </Text>
          </Heading>
        </div>
        <Image
          width={["300px", "300px", "300px", "430px"]}
          display={["none", "none", "block"]}
          src="/airplane.svg"
          alt="Avião amarelo"
          transform="translateY(50px)"
          ml="8"
        />
      </Flex>
    </Flex>
  );
}
