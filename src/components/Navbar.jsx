import {Flex, Box, HStack, Button, Spacer, Heading,Text} from "@chakra-ui/react"

export default function Navbar(){
  return (
    <div>
        <Flex>
          <Heading as="h1">DojoTasks</Heading>
          <Spacer />

          <HStack spacing="40px">
            <Box bg="gray.200" p="10px">M</Box>
            <Text>Mario</Text>
            <Button colorScheme="purple">Logout</Button>          
          </HStack>
        </Flex>
    </div>
  )
}