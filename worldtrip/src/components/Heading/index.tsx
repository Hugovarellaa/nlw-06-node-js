import {
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps,
} from "@chakra-ui/react";

interface HeadingProps extends ChakraHeadingProps {
  text: string;
}

export function Heading({ text, ...rest }: HeadingProps) {
  return (
    <ChakraHeading
      {...rest}
      textAlign="center"
      fontSize={["lg", "3xl", "4xl"]}
      fontWeight="500"
    >
      {text}
    </ChakraHeading>
  );
}
