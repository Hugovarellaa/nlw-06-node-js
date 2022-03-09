import { Grid, GridItem } from "@chakra-ui/react";
import { Travel } from "./Travel";

export function TravelTypes() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxWidth="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Travel icon="cocktail" text="Vida noturna" />
      </GridItem>
      <GridItem>
        <Travel icon="surf" text="Praia" />
      </GridItem>
      <GridItem>
        <Travel icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <Travel icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Travel icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
