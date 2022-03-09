import { Grid, GridItem } from "@chakra-ui/react";
import { Travel } from "./Travel";

export function TravelTypes() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxWidth={1160}
      gap={[1, 5]}
    >
      <GridItem>
        <Travel icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Travel icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <Travel icon="building" text="mordeno" />
      </GridItem>
      <GridItem>
        <Travel icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 1, 1]}>
        <Travel icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
