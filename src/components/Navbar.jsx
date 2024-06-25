import {Flex, Box, HStack, Button, Spacer, Heading, Image, Text} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

export default function Navbar(){
  return (
    <Box align="center" bg="gray.100">
        <Flex maxWidth="90%" >
          <Image src="../../img/Resourcify.png" alt="Logo" maxWidth="150px"></Image>
          <HStack>
            <Box ml="20px"><NavLink to="/">Home</NavLink></Box>
            <Box ml="20px"><NavLink to="/courses">Courses</NavLink></Box>
            <Box ml="20px"><NavLink to="/about">About Us</NavLink></Box>
            <Box ml="20px"><NavLink to="/pricing">Pricing</NavLink></Box>
            <Box ml="20px"><NavLink to="/contact">Contact</NavLink></Box>
          </HStack>
          <Spacer />

          <HStack spacing="40px">
            <Box><NavLink to="/signup">Signup</NavLink></Box>
            <Button bg="orange.400" color="white" _hover={{bg:"orange.500"}}><NavLink to="/login">Login</NavLink></Button>         
          </HStack>
        </Flex>
    </Box>
  )
}