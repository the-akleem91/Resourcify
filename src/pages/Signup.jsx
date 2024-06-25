// src/components/LoginPage.js

import React from 'react';
import { Box, Flex, Stack, Input, Button, Text, FormControl, FormLabel, Link, Img, Container } from "@chakra-ui/react";

const Signup = () => {
  return (
    <Flex minHeight="100vh" align="center" justify="center" bg="gray.100" direction={{ base: "column", md: "row" }}>
      <Box flex="1" bg="white" p={8} rounded="md" shadow="lg" maxW={{ base: "90%", md: "50%" }} mx="auto">
        <Stack spacing={4}>
          <Container alignItems='center' justifyContent='center'w="220px">
            <Img justifySelf='center' w="220px" src='../../img/Resourcify.png'/>  
          </Container>
          <Text fontSize="lg" textAlign="center">Login into your account</Text>
          
          <FormControl id="email">
            <FormLabel>Email Address</FormLabel>
            <Input type="email" placeholder="alex@email.com" />
          </FormControl>
          
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>
          
          <Link href="#" color="blue.500" textAlign="right">Forgot Password?</Link>
          
          <Button colorScheme="orange" size="lg">Login Now</Button>
          
          <Text textAlign="center">OR</Text>
          
          <Button variant="outline" colorScheme="orange" size="lg">Signup Now</Button>
        </Stack>
      </Box>
      <Box flex="1" display={{ base: "none", md: "flex" }} alignItems="center" justifyContent="center" bg="gray.100">
        <Box as="img" src="../../img/login-illustrator.svg" alt="Login Illustration" maxW="100%" />
      </Box>
    </Flex>
  );
};
export default Signup;
