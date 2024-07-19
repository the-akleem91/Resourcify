import {
    Box,
    Heading,
    Text,
    Flex,
    VStack,
    HStack,
    Icon,
    List,
    ListItem,
    ListIcon,
    Link,
    Button,
  } from "@chakra-ui/react";
  import { FaRocket, FaUsers, FaMoneyBill, FaChartLine, FaBook, FaHandsHelping, FaQuestionCircle } from "react-icons/fa";
  
  const EducatorPage = () => {
    return (
      <Box p={4}>
        <Heading as="h1" size="2xl" textAlign="center" mb={8}>
          Everything You Need to Become an Educator on Resourcify
        </Heading>
        <Text fontSize="xl" textAlign="center" mb={8}>
          No matter what kind of information, advice, or help you’re looking for, this is the spot.
        </Text>
        
        <Box bg="gray.100" p={6} borderRadius="md" textAlign="center" mb={8}>
          <Heading as="h2" size="xl" mb={4}>
            Start Your Teaching Journey with Resourcify for Just $5/Month
          </Heading>
          <Text fontSize="lg">
            Educators can now join Resourcify for a nominal fee of $5 per month. This gives you access to all the tools and resources you need to create, publish, and share your knowledge with the world.
          </Text>
          <Button colorScheme="teal" size="lg" mt={4}>
            Get Started
          </Button>
        </Box>
        
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          How It Works
        </Heading>
        
        <Flex justify="space-around" flexWrap="wrap">
          <VStack spacing={4} p={4} maxW="sm">
            <Icon as={FaRocket} boxSize={10} color="teal.500" />
            <Text fontSize="lg" fontWeight="bold">Getting Started on Resourcify</Text>
            <Text textAlign="center">Everything you need to create and manage your courses.</Text>
          </VStack>
          
          <VStack spacing={4} p={4} maxW="sm">
            <Icon as={FaUsers} boxSize={10} color="teal.500" />
            <Text fontSize="lg" fontWeight="bold">Building Your Community</Text>
            <Text textAlign="center">Tips and tricks to find, nurture, and build an audience.</Text>
          </VStack>
          
          <VStack spacing={4} p={4} maxW="sm">
            <Icon as={FaMoneyBill} boxSize={10} color="teal.500" />
            <Text fontSize="lg" fontWeight="bold">How to Earn Money on Resourcify</Text>
            <Text textAlign="center">Explore all the ways you can get paid for your courses.</Text>
          </VStack>
          
          <VStack spacing={4} p={4} maxW="sm">
            <Icon as={FaChartLine} boxSize={10} color="teal.500" />
            <Text fontSize="lg" fontWeight="bold">Growing Your Reach</Text>
            <Text textAlign="center">Tools to help you create, connect, and grow.</Text>
          </VStack>
          
          <VStack spacing={4} p={4} maxW="sm">
            <Icon as={FaBook} boxSize={10} color="teal.500" />
            <Text fontSize="lg" fontWeight="bold">Policies and Guidelines</Text>
            <Text textAlign="center">Get the explanations behind the rules.</Text>
          </VStack>
          
          <VStack spacing={4} p={4} maxW="sm">
            <Icon as={FaHandsHelping} boxSize={10} color="teal.500" />
            <Text fontSize="lg" fontWeight="bold">How to Get Involved</Text>
            <Text textAlign="center">How we support, recognize, and celebrate educators.</Text>
          </VStack>
        </Flex>
        
        <Heading as="h2" size="xl" mb={6} textAlign="center" mt={10}>
          Top Questions
        </Heading>
        
        <List spacing={4} maxW="3xl" mx="auto">
          <ListItem>
            <HStack alignItems="start">
              <ListIcon as={FaQuestionCircle} color="teal.500" />
              <Text fontSize="lg" fontWeight="bold">How do I start creating on Resourcify?</Text>
            </HStack>
          </ListItem>
          
          <ListItem>
            <HStack alignItems="start">
              <ListIcon as={FaQuestionCircle} color="teal.500" />
              <Text fontSize="lg" fontWeight="bold">How do I grow my community?</Text>
            </HStack>
          </ListItem>
          
          <ListItem>
            <HStack alignItems="start">
              <ListIcon as={FaQuestionCircle} color="teal.500" />
              <Text fontSize="lg" fontWeight="bold">How do I make edits to my courses?</Text>
            </HStack>
          </ListItem>
          
          <ListItem>
            <HStack alignItems="start">
              <ListIcon as={FaQuestionCircle} color="teal.500" />
              <Text fontSize="lg" fontWeight="bold">How do I promote my courses?</Text>
            </HStack>
          </ListItem>
          
          <ListItem>
            <HStack alignItems="start">
              <ListIcon as={FaQuestionCircle} color="teal.500" />
              <Text fontSize="lg" fontWeight="bold">How do trending courses happen?</Text>
            </HStack>
          </ListItem>
        </List>
        
        <Heading as="h2" size="xl" mb={6} textAlign="center" mt={10}>
          Resources
        </Heading>
        
        <Flex justify="space-around" flexWrap="wrap">
          <VStack spacing={4} p={4} maxW="sm">
            <Text fontSize="lg" fontWeight="bold">Learn</Text>
            <Text textAlign="center">Updates, news, and education from experts and educators. Weekly updates on new features and ideas for educators. Resourcify Educator Insider.</Text>
          </VStack>
          
          <VStack spacing={4} p={4} maxW="sm">
            <Text fontSize="lg" fontWeight="bold">Support</Text>
            <Text textAlign="center">Help when you need it: Fix upload problems, troubleshoot account issues, and more. Get breakdowns on the topics that are most important to educators. Plans to ask questions and provide feedback.</Text>
          </VStack>
          
          <VStack spacing={4} p={4} maxW="sm">
            <Text fontSize="lg" fontWeight="bold">Connect</Text>
            <Text textAlign="center">Ask questions, find answers, and understand more about Resourcify via our social channels and email. Join the community forum. Attend live webinars and training sessions.</Text>
          </VStack>
        </Flex>
      </Box>
    );
  };
  
  export default EducatorPage;
  