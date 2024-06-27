import React from 'react';
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Stack,
  Checkbox,
  useBreakpointValue,
  useColorModeValue,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Link
} from '@chakra-ui/react';
import { SiGoogle } from 'react-icons/si';
import ImageSlider from "../components/ImageSlider";
import { SlideData1 ,SlideData2 } from "../components/SlideData";

const Signup = () => {
  const formWidth = useBreakpointValue({ base: '100%', md: 'lg' });

  return (

    <div>
        <Tabs isFitted variant='soft-rounded' colorScheme='orange' bg="gray.100">
          <TabList>
            <Tab>Student</Tab>
            <Tab>Creator</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Flex minH="100vh" flexDirection={{ base: 'column', lg: 'row' }} align="center" justify="center" bg='gray.100' action="/login" method="post">
                <Box
                  flex="1"
                  display={{ base: 'none', md: 'flex' }}
                  bg='gray.100'
                  color="white"
                  alignItems="center"
                  justifyContent="center"
                  p={8}
                >
                  <Box w="100%" p={4} color="white">
                    <ImageSlider slides={SlideData2} />
                  </Box>

                </Box>
                <Stack spacing={8} mx="auto" maxW={formWidth} py={12} px={6} flex="1">
                  <Stack align="center">
                    <Text fontSize="4xl">Register Student Account!</Text>
                    <Text fontSize="lg" color="gray.600">
                      For the purpose of gamers regulation, your details are required.
                    </Text>
                  </Stack>
                  <Box rounded="lg" bg={useColorModeValue('white', 'gray.700')} boxShadow="lg" p={8}>
                    <Stack spacing={4}>
                      <Input placeholder="Enter email address" type="email" />
                      <Input placeholder="Password" type="password" />
                      <Input placeholder="Repeat password" type="password" />
                      <Stack spacing={10}>
                        <Checkbox>I agree to terms & conditions</Checkbox>
                        <Button bg="orange.400" color="white" _hover={{ bg: 'orange.500' }}>
                          Register Account
                        </Button>
                        <Button variant="outline" leftIcon={<SiGoogle />}>
                          Register with Google
                        </Button>
                        <Text align="center">Already a Student? <Link href=''>Login</Link></Text>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </Flex>
            </TabPanel>
            <TabPanel>
            <Flex minH="100vh" flexDirection={{ base: 'column', lg: 'row' }} align="center" justify="center" bg='gray.100'>
                <Stack spacing={8} mx="auto" maxW={formWidth} py={12} px={6} flex="1">
                  <Stack align="center">
                    <Text fontSize="4xl">Register Creator Account!</Text>
                    <Text fontSize="lg" color="gray.600">
                      For the purpose of Creator regulation, your details are required.
                    </Text>
                  </Stack>
                  <Box rounded="lg" bg={useColorModeValue('white', 'gray.700')} boxShadow="lg" p={8}>
                    <Stack spacing={4}>
                      <Input placeholder="Enter email address" type="email" />
                      <Input placeholder="Password" type="password" />
                      <Input placeholder="Repeat password" type="password" />
                      <Stack spacing={10}>
                        <Checkbox>I agree to terms & conditions</Checkbox>
                        <Button bg="orange.400" color="white" _hover={{ bg: 'orange.500' }}>
                          Register Account
                        </Button>
                        <Button variant="outline" leftIcon={<SiGoogle />}>
                          Register with Google
                        </Button>
                        <Text align="center">Already a Creator?<Link>Login</Link></Text>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
                <Box
                  flex="1"
                  display={{ base: 'none', md: 'flex' }}
                  bg='gray.100'
                  color="white"
                  alignItems="center"
                  justifyContent="center"
                  p={8}
                >                  
                  <Box w="100%" p={4} color="white">
                    <ImageSlider slides={SlideData1} />
                  </Box>

                </Box>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
        
    </div>
  );
};

export default Signup;
