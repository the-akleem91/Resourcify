import React from 'react';
import { Box, Flex, Text, Button, VStack, HStack, Icon } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const Pricing = () => {
  return (
    <Box bg="gray.100" p={10} minH="100vh">
      <Text fontSize="4xl" color='orange.300' fontWeight='bolder' textAlign="center" mb={10}>
        Pricing
      </Text>
      <Flex 
        justify="center" 
        align="center" 
        flexWrap="wrap"
      >
        <Box
          w={{ base: "100%", md: "600px" }}
          h={{ base: 'auto', md:"auto"}}
          bg="#FEC00F"
          p={6}
          borderRadius="md"
          shadow="md"
          m={4}
          textAlign="center"
        >
          <HStack justifyContent='space-between'>
            <Text fontSize="2xl" fontWeight="bolder" color='white'>
              Student
            </Text>
            <Text  fontSize='l' fontWeight=";ight" color='white'>
              $00.00/Mon
            </Text>
          </HStack>
          <Text fontSize="sm" align='right' color="#FED04B" mb={4}>
            7-Day Free Trial
          </Text>
          <VStack align="start" mb={6}>
            <HStack>
              <Icon as={CheckIcon} color="green.500" />
              <Text color='white'>Access to all courses</Text>
            </HStack>
            <HStack>
              <Icon as={CheckIcon} color="green.500" />
              <Text color='white'>Access to all course materials</Text>
            </HStack>
            <HStack>
              <Icon as={CheckIcon} color="green.500" />
              <Text color='white'>Enroll in multiple courses at once</Text>
            </HStack>
            <HStack>
              <Icon as={CheckIcon} color="green.500" />
              <Text color='white'>Access to certificate after completing courses</Text>
            </HStack>
            <HStack>
              <Icon as={CheckIcon} color="green.500" />
              <Text color='white'>Access to student community</Text>
            </HStack>
          </VStack>
          <Button bg='black' variant="solid" w='100%' color='white' _hover={{bg : 'white', color : 'black'}}>
            CURRENT PLAN
          </Button>
        </Box>
        <Box
          w={{ base: "100%", md: "600px" }}
          h={{ base: 'auto', md:"auto"}}
          bg="#FEC00F"
          p={6}
          borderRadius="md"
          shadow="md"
          m={4}
          textAlign="center"
        >
          <HStack justifyContent='space-between'>
            <Text fontSize="2xl" fontWeight="bolder" color='white'>
              Creator
            </Text>
            <Text  fontSize='l' fontWeight=";ight" color='white'>
              $05.00/Mon
            </Text>
          </HStack>
          <Text fontSize="sm" align='right' color="#FED04B" mb={4}>
            7-Day Free Trial
          </Text>
          <VStack align="start" mb={6}>
            <HStack>
              <Icon as={CheckIcon} color="green.500" />
              <Text color='white'>Access to make multiple courses</Text>
            </HStack>
            <HStack>
              <Icon as={CheckIcon} color="green.500" />
              <Text color='white'>Add customize certificate for enrollers</Text>
            </HStack>
            <HStack>
              <Icon as={CheckIcon} color="green.500" />
              <Text color='white'>Provide study materials</Text>
            </HStack>
            <HStack>
              <Icon as={CheckIcon} color="green.500" />
              <Text color='white'>Access to student community</Text>
            </HStack>
            <HStack>
              <Icon as={CheckIcon} color="green.500" />
              <Text color='white'>Access to creator community</Text>
            </HStack>
          </VStack>
          <Button bg='black' variant="solid" w='100%' color='white' _hover={{bg : 'white', color : 'black'}}>
            VIEW PLAN
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Pricing;
