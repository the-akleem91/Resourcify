import { Box , Button, Center, ChakraProvider, Grid, Icon, SimpleGrid , Text} from "@chakra-ui/react";
import { MdArrowOutward } from "react-icons/md";

export default function Benefits() {
  return (
    <Box ml="100px" my="130px">
        
        <ChakraProvider>
                <Text fontSize="30px" fontWeight="semibold">
                    Benefits
                </Text>
                <SimpleGrid p="10px" spacing={10} maxWidth="1300px" minChildWidth={{ base: "100px" , lg : "150px" , xl : "550px"}}>
                    <Box 
                    width={{base: "50px" , lg : "150px" , xl : "1000px"}}
                    height={{ base: "50px" , lg : "75px" , xl : "100px"}}><Text>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</Text></Box>
                    <Box
                    height={{ base: "50px" , lg : "75px" , xl : "100px"}}
                    ml="450px"><Button>View All</Button></Box>
                </SimpleGrid>
        </ChakraProvider>
       
        <SimpleGrid p="10px" spacing={10} maxWidth="1300px" minChildWidth={{ base: "100px" , lg : "150px" , xl : "350px"}}>
            <Box 
            bg="white"
            borderRadius="15px"
            height={{ base: "100px" , lg : "150px" , xl : "350px"}}>
                <Box>
                    <Text ml="300px" pt="5px" fontSize="60px" fontWeight="bolder">01</Text>
                </Box>
                <Box>
                    <Text ml="30px" pt="40px" fontSize="20px" fontWeight="semibold">Flexible Learning Schedule</Text>
                </Box>
                <Box>
                    <Text ml="30px"  pt="10px" fontSize="15px" maxWidth="340px">Fit your coursework around your existing commitments and obligations.</Text>
                </Box>
                <Box>
                    <Button ml="300px" mt="50px" h="65px" w="65px" borderRadius="10px" color="orange.300">
                        <Icon as={MdArrowOutward} h={10} w={10} ></Icon>
                    </Button>
                </Box>
            </Box>
            <Box 
            bg="white"
            borderRadius="15px"
            height={{ base: "100px" , lg : "150px" , xl : "350px"}}>
                <Box>
                    <Text ml="300px" pt="5px" fontSize="60px" fontWeight="bolder">02</Text>
                </Box>
                <Box>
                    <Text ml="30px" pt="40px" fontSize="20px" fontWeight="semibold">Expert Instruction</Text>
                </Box>
                <Box>
                    <Text ml="30px"  pt="10px" fontSize="15px" maxWidth="340px">Learn from industry experts who have hands-on experience in design and development.</Text>
                </Box>
                <Box>
                    <Button ml="300px" mt="50px" h="65px" w="65px" borderRadius="10px" color="orange.300">
                        <Icon as={MdArrowOutward} h={10} w={10} ></Icon>
                    </Button>
                </Box>
            </Box>
            <Box 
            bg="white"
            borderRadius="15px"
            height={{ base: "100px" , lg : "150px" , xl : "350px"}}>
                <Box>
                    <Text ml="300px" pt="5px" fontSize="60px" fontWeight="bolder">03</Text>
                </Box>
                <Box>
                    <Text ml="30px" pt="40px" fontSize="20px" fontWeight="semibold">Diverse Course Offerings</Text>
                </Box>
                <Box>
                    <Text ml="30px"  pt="10px" fontSize="15px" maxWidth="340px">Explore a wide range of design and development courses covering various topics.</Text>
                </Box>
                <Box>
                    <Button ml="300px" mt="50px" h="65px" w="65px" borderRadius="10px" color="orange.300">
                        <Icon as={MdArrowOutward} h={10} w={10} ></Icon>
                    </Button>
                </Box>
            </Box>
            <Box 
            bg="white"
            borderRadius="15px"
            height={{ base: "100px" , lg : "150px" , xl : "350px"}}>
                <Box>
                    <Text ml="300px" pt="5px" fontSize="60px" fontWeight="bolder">04</Text>
                </Box>
                <Box>
                    <Text ml="30px" pt="40px" fontSize="20px" fontWeight="semibold">Updated Curriculum</Text>
                </Box>
                <Box>
                    <Text ml="30px"  pt="10px" fontSize="15px" maxWidth="340px">Access courses with up-to-date content reflecting the latest trends and industry practices.</Text>
                </Box>
                <Box>
                    <Button ml="300px" mt="50px" h="65px" w="65px" borderRadius="10px" color="orange.300">
                        <Icon as={MdArrowOutward} h={10} w={10} ></Icon>
                    </Button>
                </Box>
            </Box>  
            <Box 
            bg="white"
            borderRadius="15px"
            height={{ base: "100px" , lg : "150px" , xl : "350px"}}>
                <Box>
                    <Text ml="300px" pt="5px" fontSize="60px" fontWeight="bolder">05</Text>
                </Box>
                <Box>
                    <Text ml="30px" pt="40px" fontSize="20px" maxWidth="340px" fontWeight="semibold">Practical Projects and Assignments</Text>
                </Box>
                <Box>
                    <Text ml="30px"  pt="10px" fontSize="15px" maxWidth="340px">Develop a portfolio showcasing your skills and abilities to potential employers.</Text>
                </Box>
                <Box>
                    <Button ml="300px" mt="50px" h="65px" w="65px" borderRadius="10px" color="orange.300">
                        <Icon as={MdArrowOutward} h={10} w={10} ></Icon>
                    </Button>
                </Box>
            </Box>
            <Box 
            bg="white"
            borderRadius="15px"
            height={{ base: "100px" , lg : "150px" , xl : "350px"}}>
                <Box>
                    <Text ml="300px" pt="5px" fontSize="60px" fontWeight="bolder">06</Text>
                </Box>
                <Box>
                    <Text ml="30px" pt="40px" fontSize="20px" fontWeight="semibold">Interactive Learning Environment</Text>
                </Box>
                <Box>
                    <Text ml="30px"  pt="10px" fontSize="15px" maxWidth="340px">Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.</Text>
                </Box>
                <Box>
                    <Button ml="300px" mt="50px" h="65px" w="65px" borderRadius="10px" color="orange.300">
                        <Icon as={MdArrowOutward} h={10} w={10} ></Icon>
                    </Button>
                </Box>
            </Box>
        </SimpleGrid>
    </Box>
  )
}