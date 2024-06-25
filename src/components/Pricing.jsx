import {
  Flex,
  Heading,
  VStack,
  Stack,
  Box,
  Grid,
  Text
} from "@chakra-ui/react";
import PricingBox from "../components/PricingBox.jsx";
import { prices } from "./data.jsx";

const Pricing = () => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="center"
    minH="100vh"
    w="full"
    backgroundColor="gray.100"
  >
    <Stack
      spacing={5}
      marginY={5}
      justifyContent="flex-start"
      alignItems="center"
      maxWidth="1200px"
      w="full"
      paddingX={[5, 0]}
    >
      <VStack alignItems="center" w="full">
        <Heading color="orange.300">Pricing</Heading>
        <Text mb={5} textAlign="center">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
        </Text>
      </VStack>
      <Stack
        spacing={0}
        isInline
        border="1px solid"
        borderColor="orange.300"
        borderRadius="4px"
        justifyContent="center"
        alignItems="stretch"
        display="flex"
        width="fit-content"
        backgroundColor="white"
        mb={3}
      >
        <Box backgroundColor="orange.300" color="white" p=".3rem 1rem">
          Monthly
        </Box>
        <Box p=".3rem 1rem">Annually</Box>
      </Stack>
      <Grid
        w="full"
        gap={5}
        justifyContent="center"
        templateColumns={{
          base: "inherit",
          md: "repeat( auto-fit, 250px )"
        }}
      >
        {prices.map((price) => (
          <PricingBox key={price.name} {...price} />
        ))}
      </Grid>
    </Stack>
  </Flex>
);

export default Pricing;