import { Box , Button, Center, ChakraProvider, Grid, Icon, SimpleGrid  , HStack , Text} from "@chakra-ui/react";
import { FaBoltLightning } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function HeroHome() {
  return (
    <Box my="130px">
        <ChakraProvider>
            <Center>
                <HStack bg="white" borderRadius="10px">
                    <Icon as={FaBoltLightning} bg="orange.100" p="10px" m="10px" w={12} h={12} borderRadius="10px"></Icon>
                    <HStack ><Text color="orange.300" fontSize="40px" fontWeight="bold">Unlock</Text><Text fontSize="40px" p="10px" fontWeight="bold">our Creative Potential</Text></HStack>
                </HStack>
            </Center>
            <Center my="25px">
            <Box>
                <Text fontSize="25px">
                    with Online Design and Development Courses.
                    </Text>
            </Box>
            </Center>
            <Center my="25px">
            <Box>
                <Text fontSize="15px">
                    Learn from Industry Experts and Enhance Your Skills.
                </Text>
            </Box>
            </Center>    
            <Center my="25px">
            <Button color="white" bg="orange.400" _hover={{bg:"orange.500"}} m="10px"><NavLink to="/courses">Explore Courses</NavLink></Button>
            <Button color="black" bg="white" _hover={{bg: "gray.100"}} m="10px"><NavLink to="/pricing">View Pricing</NavLink></Button>
            </Center> 
        </ChakraProvider>
    </Box>
  )
}
