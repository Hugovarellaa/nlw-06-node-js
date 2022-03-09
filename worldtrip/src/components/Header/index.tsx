import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from "react-icons/ri";

export function Header() {
  const { asPath } = useRouter();
  const noHomePage = asPath !== "/";

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
        {noHomePage && (
          <Link href="/">
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[20, 40]}
                justifyContent="start"
              />
            </a>
          </Link>
        )}
        <Image
          width={["81px", "184px"]}
          src="/logo.svg"
          alt="Logo worldtrip"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
