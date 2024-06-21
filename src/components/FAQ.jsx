import { Box , Button, Center, ChakraProvider, Grid, Icon, SimpleGrid , Text , Img, HStack} from "@chakra-ui/react";
import { CiCirclePlus } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export default function FAQ() {
  return (
    <Box ml="5%" bg="whitesmoke" maxWidth="90%" mb="100px">
      <Box bg="white">
        <HStack>
          <Box p="4%" w="45%" >
            <ChakraProvider>
              <Text fontSize={{base : "20px" ,lg : "25px" ,xl : "40px"}} fontWeight="bolder">Frequently Asked Questions</Text>
              <Text fontSize={{base : "10px" ,lg : "17px" ,xl : "20px"}}>Still you have any questions? Contact our Team via support@skillbridge.com</Text>
              <Button mt="35px" bg="white" border="1px solid gray" w={{base : "105px" ,lg : "110px" ,xl : "120px"}} h={{base : "30px" ,lg : "35px" ,xl : "45px"}}><NavLink to="/pricing">See all FAQ's</NavLink></Button>
            </ChakraProvider>
          </Box>
          <Box w="65%" >
            <Box border="1px solid gray" mb="5%" mt="2%" w={{base : "80%" ,lg : "92%" ,xl : "95%"}} borderRadius="10px" >
              <Box px="40px" py="20px" maxHeight="70px">
                <HStack>
                  <Text fontSize={{base : "10px" ,lg : "17px" ,xl : "20px"}} mb="15px" w="800px" >Can I enroll in multiple courses at once?</Text>
                  <Button h="50px" w="50px" bg="white" pb="15px" _hover={{bg : "white"}}>
                    <Icon as={CiCirclePlus} h={{base : 4 ,lg : 6 ,xl : 8}} w={{base : 4 ,lg : 6 ,xl : 8}}></Icon>
                  </Button>
                </HStack>
              </Box>
            </Box>
            <Box border="1px solid gray" mb="5%" mt="2%" w={{base : "80%" ,lg : "92%" ,xl : "95%"}} borderRadius="10px">
              <Box px="40px" py="20px" maxHeight="70px">
                <HStack>
                  <Text fontSize={{base : "10px" ,lg : "17px" ,xl : "20px"}} mb="15px" w="800px" >What kind of support can I expect from instructors?</Text>
                  <Button h="50px" w="50px" bg="white" pb="15px" _hover={{bg : "white"}}>
                    <Icon as={CiCirclePlus} h={{base : 4 ,lg : 6 ,xl : 8}} w={{base : 4 ,lg : 6 ,xl : 8}}></Icon>
                  </Button>
                </HStack>
              </Box>
            </Box>
            <Box border="1px solid gray" mb="5%" mt="2%" w={{base : "80%" ,lg : "92%" ,xl : "95%"}} borderRadius="10px">
              <Box px="40px" py="20px" maxHeight="70px">
                <HStack>
                  <Text fontSize={{base : "10px" ,lg : "17px" ,xl : "20px"}} mb="15px" w="800px" >Are the courses self-paced?</Text>
                  <Button h="50px" w="50px" bg="white" pb="15px" _hover={{bg : "white"}}>
                    <Icon as={CiCirclePlus} h={{base : 4 ,lg : 6 ,xl : 8}} w={{base : 4 ,lg : 6 ,xl : 8}}></Icon>
                  </Button>
                </HStack>
              </Box>
            </Box>
            <Box border="1px solid gray" mb="5%" mt="2%" w={{base : "80%" ,lg : "92%" ,xl : "95%"}} borderRadius="10px">
              <Box px="40px" py="20px" maxHeight="70px">
                <HStack>
                  <Text fontSize={{base : "10px" ,lg : "17px" ,xl : "20px"}} mb="15px" w="800px" >Are there any prerequisites for the courses?</Text>
                  <Button h="50px" w="50px" bg="white" pb="15px" _hover={{bg : "white"}}>
                    <Icon as={CiCirclePlus} h={{base : 4 ,lg : 6 ,xl : 8}} w={{base : 4 ,lg : 6 ,xl : 8}}></Icon>
                  </Button>
                </HStack>
              </Box>
            </Box>
            <Box border="1px solid gray" mb="5%" mt="2%" w={{base : "80%" ,lg : "92%" ,xl : "95%"}} borderRadius="10px">
              <Box px="40px" py="20px" maxHeight="70px">
                <HStack>
                  <Text fontSize={{base : "10px" ,lg : "17px" ,xl : "20px"}} mb="15px" w="800px" >Can I download the course materials for offline access?</Text>
                  <Button h="50px" w="50px" bg="white" pb="15px" _hover={{bg : "white"}}>
                    <Icon as={CiCirclePlus} h={{base : 4 ,lg : 6 ,xl : 8}} w={{base : 4 ,lg : 6 ,xl : 8}}></Icon>
                  </Button>
                </HStack>
              </Box>
            </Box>
          </Box>
        </HStack>
      </Box>
    </Box>
  )
}