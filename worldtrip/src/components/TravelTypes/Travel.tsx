/* eslint-disable jsx-a11y/alt-text */
import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelProps {
  icon: string;
  text: string;
}

export function Travel({ icon, text }: TravelProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });
  return (
    <Flex
      direction={["row", "column"]}
      alignItems="center"
      justifyContent="center"
    >
      {isMobile ? (
        <Image src={`/icons/${icon}.svg`} width="85px" height="85px" mb="6" />
      ) : (
        <Text color="yellow.400" fontSize="4xl">
          ◾
        </Text>
      )}
      <Text fontWeight="600" color="gray.700" fontSize={["md", "xl", "2xl"]}>
        {text}
      </Text>
    </Flex>
  );
}
