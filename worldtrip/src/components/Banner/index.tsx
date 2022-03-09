/* eslint-disable jsx-a11y/alt-text */
import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      width="100%"
      height={["163px", "250px", "250px", "335px"]}
      bgImage="url(/banner.jpg)"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
    >
      <Flex
        justifyContent={["center", "space-between"]}
        alignItems="center"
        width="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <div>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}
          >
            5 continentes, <br />
            infinitas possibilidades.
          </Heading>
          <Text
            color="gray.300"
            mt="5"
            fontSize={["0.8rem", "xl"]}
            maxWidth={["100%", "100%", "100%", "550px"]}
          >
            Chegou a hora de tirar a viagem que você sempre sonhou.
          </Text>
        </div>
        <Image
          width={["300px", "300px", "430px"]}
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
