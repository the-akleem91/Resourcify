import {
  Flex,
  Box,
  HStack,
  Button,
  Spacer,
  Heading,
  Image, 
  Text,
  Icon,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  ChakraProvider,
  chakra,
  Center,
} from '@chakra-ui/react';
import { 
  EmailIcon,
  PhoneIcon,
  AtSignIcon,
} from "@chakra-ui/icons";
import { FaFacebook , FaTwitterSquare, FaLinkedin} from "react-icons/fa";


export default function Navbar(){
  return (
    <Box bg="white" justifyItems="center">
        <Flex px="100px" py="20px">
          <Box>
            <Image src="../../img/Resourcify.png" alt="Logo" maxWidth="150px" paddingBottom="20px"></Image>
            <List spacing={4}>
              <ListItem>
                <ListIcon as={EmailIcon} color='black' />
                jayantjoshi0001@gmail.com
              </ListItem>
              <ListItem>
                <ListIcon as={PhoneIcon} color='black' />
                +91-9888237022
              </ListItem>
              <ListItem>
                <ListIcon as={AtSignIcon} color='black' />
                Ludhiana, Punjab, India
              </ListItem>
            </List>
          </Box>
          <Spacer />
          <Box p="20px">
            <List spacing={4}>
                <ListItem>
                  <Text fontWeight="bold" fontFamily="sans-serif">Home</Text>
                </ListItem>
                <ListItem>
                  <Text fontFamily="sans-serif">Benefits</Text>
                </ListItem>
                <ListItem>
                <Text fontFamily="sans-serif">Our Courses</Text>
                </ListItem>
                <ListItem>
                <Text fontFamily="sans-serif">Our Testimonials</Text>
                </ListItem>
                <ListItem>
                <Text fontFamily="sans-serif">Our FAQ</Text>
                </ListItem>
            </List>
          </Box>
          <Box p="20px">
          <List spacing={4}>
                <ListItem>
                  <Text fontWeight="bold" fontFamily="sans-serif">About Us</Text>
                </ListItem>
                <ListItem>
                  <Text fontFamily="sans-serif">Company</Text>
                </ListItem>
                <ListItem>
                <Text fontFamily="sans-serif">Achievements</Text>
                </ListItem>
                <ListItem>
                <Text fontFamily="sans-serif">Our Goals</Text>
                </ListItem>
            </List>
          </Box>
          <Box p="20px">
          <List spacing={4}>
                <ListItem>
                  <Text fontWeight="bold" fontFamily="sans-serif">Social Profiles</Text>
                </ListItem>
                <ListItem>
                  <Icon as={FaFacebook} w={8} h={8} p="5px"></Icon>
                  <Icon as={FaTwitterSquare} w={8} h={8} p="5px"></Icon>
                  <Icon as={FaLinkedin} w={8} h={8} p="5px"></Icon>
                </ListItem>
            </List>
          </Box>
        </Flex>
        <Center>
          <Text>All rights are reserved to Jayant Joshi</Text>
        </Center>
    </Box>
  )
}