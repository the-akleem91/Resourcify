import { Box , Button, Center, ChakraProvider, Grid, Icon, SimpleGrid , Text , Img, HStack} from "@chakra-ui/react";
import { CiCirclePlus } from "react-icons/ci";

export default function FAQ() {
  return (
    <Box ml="100px" bg="whitesmoke" maxWidth="1300px" mb="100px">
      <Box bg="white">
        <HStack>
          <Box p="40px" maxWidth="450px">
            <ChakraProvider>
              <Text fontSize="40px" fontWeight="bolder">Frequently Asked Questions</Text>
              <Text fontSize="20px">Still you have any questions? Contact our Team via support@skillbridge.com</Text>
              <Button mt="35px" bg="white" border="1px solid gray">See All FAQ’s</Button>
            </ChakraProvider>
          </Box>
          <Box>
            <Box border="1px solid gray" mb="40px" mt="40px" w="800px" borderRadius="10px" >
              <Box px="40px" py="20px" maxHeight="70px">
                <HStack>
                  <Text fontSize="20px" mb="15px" w="800px" >Can I enroll in multiple courses at once?</Text>
                  <Button h="50px" w="50px" bg="white" pb="15px" _hover={{bg : "white"}}>
                    <Icon as={CiCirclePlus} h={8} w={8}></Icon>
                  </Button>
                </HStack>
              </Box>
            </Box>
            <Box border="1px solid gray" mb="40px" w="800px" borderRadius="10px" >
              <Box px="40px" py="20px" maxHeight="70px">
                <HStack>
                  <Text fontSize="20px" mb="15px" w="800px" >What kind of support can I expect from instructors?</Text>
                  <Button h="50px" w="50px" bg="white" pb="15px" _hover={{bg : "white"}}>
                    <Icon as={CiCirclePlus} h={8} w={8}></Icon>
                  </Button>
                </HStack>
              </Box>
            </Box>
            <Box border="1px solid gray" mb="40px" w="800px" borderRadius="10px" >
              <Box px="40px" py="20px" maxHeight="70px">
                <HStack>
                  <Text fontSize="20px" mb="15px" w="800px" >Are the courses self-paced or do they have specific start and end dates?</Text>
                  <Button h="50px" w="50px" bg="white" pb="15px" _hover={{bg : "white"}}>
                    <Icon as={CiCirclePlus} h={8} w={8}></Icon>
                  </Button>
                </HStack>
              </Box>
            </Box>
            <Box border="1px solid gray" mb="40px" w="800px" borderRadius="10px" >
              <Box px="40px" py="20px" maxHeight="70px">
                <HStack>
                  <Text fontSize="20px" mb="15px" w="800px" >Are there any prerequisites for the courses?</Text>
                  <Button h="50px" w="50px" bg="white" pb="15px" _hover={{bg : "white"}}>
                    <Icon as={CiCirclePlus} h={8} w={8}></Icon>
                  </Button>
                </HStack>
              </Box>
            </Box>
            <Box border="1px solid gray" mb="40px" w="800px" borderRadius="10px" >
              <Box px="40px" py="20px" maxHeight="70px">
                <HStack>
                  <Text fontSize="20px" mb="15px" w="800px" >Can I download the course materials for offline access?</Text>
                  <Button h="50px" w="50px" bg="white" pb="15px" _hover={{bg : "white"}}>
                    <Icon as={CiCirclePlus} h={8} w={8}></Icon>
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