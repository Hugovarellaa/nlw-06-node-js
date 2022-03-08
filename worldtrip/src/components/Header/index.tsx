import { Flex, Grid, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      background="white"
      width="100%"
      mx="auto"
      px="1rem"
      height={["50px", "100px"]}
      alignItems="center"
      justify-content="center"
    >
      <Grid
        height="100%"
        mx="auto"
        width="100%"
        maxWidth={1160}
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        <Image
          width={["81px" , "184px"]}
          src="/logo.svg"
          alt="Um avião voando sobre o nome da marca World Trip"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
