import {React , useState} from 'react';
import Axios from 'axios';
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
import ImageSlider from "./components/ImageSlider";
import { SlideData1 ,SlideData2 } from "./components/SlideData";
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const formWidth = useBreakpointValue({ base: '100%', md: 'lg' });
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const navigate =useNavigate();

  const handlePublish = async () => {
    const formData = new FormData();
    formData.append('title', courseTitle);
    formData.append('description', courseDescription);
    if (courseNotes) formData.append('notes', courseNotes);
    if (videoLectures) formData.append('video', videoLectures);

    try {
        const response = await axios.post('http://localhost:3000/courses', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log(response.data);
        toast({
            title: "Chapter Published",
            description: "Your chapter details have been saved.",
            status: "success",
            duration: 5000,
            isClosable: true,
        });

        // Reset the form (optional)
        setCourseTitle('');
        setCourseDescription('');
        setCourseNotes(null);
        setVideoLectures(null);
    } catch (error) {
        console.error('Error saving chapter details:', error);  // Log the error
        toast({
            title: "Error",
            description: "There was an error saving your chapter details.",
            status: "error",
            duration: 5000,
            isClosable: true,
        });
    }
};


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
                      <label htmlFor='username'>Username:</label>
                      <input 
                        type="text" 
                        placeholder="Username" 
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <label htmlFor='email'>Email:</label>
                      <input 
                        type="text" 
                        placeholder="Email" 
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor='password'>Password:</label>
                      <input 
                        type='password' 
                        placeholder="*******" 
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <Stack spacing={10}>
                        <Checkbox>I agree to terms & conditions</Checkbox>
                        <Button bg="orange.400" color="white" _hover={{ bg: 'orange.500' }} onClick={handleSignup}>
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
