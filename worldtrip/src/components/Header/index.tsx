import { Flex, Grid, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      background="white"
      width="100%"
      height={["50px", "100px"]}
      as="header"
      mx="auto"
      px="1rem"
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        height="100px"
        width="100%"
        maxWidth={1160}
        mx="auto"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        <Image
          src="/logo.svg"
          alt="Logo worldtrip"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
