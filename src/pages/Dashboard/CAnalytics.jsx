import React from 'react';
import { ChakraProvider, Container, Heading , Flex, Text, VStack} from '@chakra-ui/react';
import BarChart from './Creator-Components/barchart';
import Sidebar from './Creator-Components/sidebar';

const CAnalytics = () => {
  const data = {
    labels: ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5', 'Course 6', 'Course 7'],
    datasets: [
      {
        label: 'Views',
        data: [45, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <ChakraProvider border='5px solid black'>
      <Flex h='100vh'>
        <Sidebar />
        <VStack w='100%' >
          <Flex w='100%' justifyContent='space-around'>
            <VStack bg='gray.100' w='48%' borderRadius='10px' >
              <Text fontSize='20px' fontWeight='semibold'>Total Views</Text>
              <Text fontSize='40px' fontWeight='bold'>500 views</Text>
            </VStack>
            <VStack  bg='gray.100' w='48%' borderRadius='10px'>
              <Text fontSize='20px' fontWeight='semibold'>Total Course</Text>
              <Text fontSize='40px' fontWeight='bold'>7 Courses</Text>
            </VStack>
          </Flex>
          <Container maxW="container.lg" p={4}>
            <BarChart data={data} options={options} />
          </Container>
        </VStack>
      </Flex>
    </ChakraProvider>
  );
};

export default CAnalytics;