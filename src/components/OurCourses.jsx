import { Box , Button, Center, ChakraProvider, Grid, Icon, SimpleGrid , Text , Img, HStack} from "@chakra-ui/react";
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function OurCourses() {
  return (
    <Box ml="100px" mb="100px">
        
        <ChakraProvider>
                <Text fontSize="30px" fontWeight="semibold">
                    Our Courses
                </Text>
                <SimpleGrid p="10px" spacing={10} maxWidth="1300px" minChildWidth={{ base: "100px" , lg : "150px" , xl : "550px"}}>
                    <Box 
                    width={{base: "50px" , lg : "150px" , xl : "1000px"}}
                    height={{ base: "50px" , lg : "75px" , xl : "100px"}}><Text>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</Text></Box>
                    <Box
                    height={{ base: "50px" , lg : "75px" , xl : "100px"}}
                    ml="450px"><Button><NavLink to="/courses">View all</NavLink></Button></Box>
                </SimpleGrid>
        </ChakraProvider>
       
        <SimpleGrid p="10px" spacing={10} maxWidth="1300px" minChildWidth={{ base: "100px" , lg : "150px" , xl : "350px"}}>
            <Box 
            bg="white"
            borderRadius="15px"
            height={{ base: "100px" , lg : "150px" , xl : "480px"}}>
                <Box p="10px">
                    <Img aspectRatio={16/9} src="../../img/Image1.png" maxWidth="380px"></Img>
                </Box>
                <Box>
                    <HStack p="10px">
                        <Box border="1px solid whitesmoke" h="20px" w="55px" borderRadius="4px"><Text fontSize="12px" w="45px" ml="4px">4 weeks</Text></Box>
                        <Box border="1px solid whitesmoke" h="20px" w="58px" borderRadius="4px"><Text fontSize="12px" w="48px" ml="4px">Beginner</Text></Box>
                    </HStack>
                </Box>
                <Box px="12px" pt="10px">
                    <Text fontSize="20px" fontWeight="semibold">Web Design Fundamentals</Text>
                </Box>
                <Box  px="12px" pt="10px">
                    <Text fontSize="15px" maxWidth="340px">Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</Text>
                </Box>
                <Box px="12px" pt="20px">
                    <Button h="35px" w="375px" borderRadius="5px" color="black">
                        Get it now!
                    </Button>
                </Box>
            </Box>
            <Box 
            bg="white"
            borderRadius="15px"
            height={{ base: "100px" , lg : "150px" , xl : "480px"}}>
                <Box p="10px">
                    <Img aspectRatio={16/9} src="../../img/Image.png" maxWidth="380px"></Img>
                </Box>
                <Box>
                    <HStack p="10px">
                        <Box border="1px solid whitesmoke" h="20px" w="55px" borderRadius="4px"><Text fontSize="12px" w="45px" ml="4px">6 weeks</Text></Box>
                        <Box border="1px solid whitesmoke" h="20px" w="78px" borderRadius="4px"><Text fontSize="12px" w="68px" ml="4px">Intermediate</Text></Box>
                    </HStack>
                </Box>
                <Box px="12px" pt="10px">
                    <Text fontSize="20px" fontWeight="semibold">UI/UX Design</Text>
                </Box>
                <Box  px="12px" pt="10px">
                    <Text fontSize="15px" maxWidth="340px">Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.</Text>
                </Box>
                <Box px="12px" pt="20px">
                    <Button h="35px" w="375px" borderRadius="5px" color="black">
                        Get it now!
                    </Button>
                </Box>
            </Box>
            <Box 
            bg="white"
            borderRadius="15px"
            height={{ base: "100px" , lg : "150px" , xl : "480px"}}>
                <Box p="10px">
                    <Img aspectRatio={16/9} src="../../img/Image3.png" maxWidth="380px"></Img>
                </Box>
                <Box>
                    <HStack p="10px">
                        <Box border="1px solid whitesmoke" h="20px" w="55px" borderRadius="4px"><Text fontSize="12px" w="45px" ml="4px">4 weeks</Text></Box>
                        <Box border="1px solid whitesmoke" h="20px" w="58px" borderRadius="4px"><Text fontSize="12px" w="48px" ml="4px">Beginner</Text></Box>
                    </HStack>
                </Box>
                <Box px="12px" pt="10px">
                    <Text fontSize="20px" fontWeight="semibold">Mobile App Development</Text>
                </Box>
                <Box  px="12px" pt="10px">
                    <Text fontSize="15px" maxWidth="340px">Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.</Text>
                </Box>
                <Box px="12px" pt="20px">
                    <Button h="35px" w="375px" borderRadius="5px" color="black">
                        Get it now!
                    </Button>
                </Box>
            </Box>
            <Box 
            bg="white"
            borderRadius="15px"
            height={{ base: "100px" , lg : "150px" , xl : "480px"}}>
                <Box p="10px">
                    <Img aspectRatio={16/9} src="../../img/Image4.png" maxWidth="380px"></Img>
                </Box>
                <Box>
                    <HStack p="10px">
                        <Box border="1px solid whitesmoke" h="20px" w="55px" borderRadius="4px"><Text fontSize="12px" w="45px" ml="4px">4 weeks</Text></Box>
                        <Box border="1px solid whitesmoke" h="20px" w="58px" borderRadius="4px"><Text fontSize="12px" w="48px" ml="4px">Beginner</Text></Box>
                    </HStack>
                </Box>
                <Box px="12px" pt="10px">
                    <Text fontSize="20px" fontWeight="semibold">Graphic Design for Beginners</Text>
                </Box>
                <Box  px="12px" pt="10px">
                    <Text fontSize="15px" maxWidth="340px">Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.</Text>
                </Box>
                <Box px="12px" pt="20px">
                    <Button h="35px" w="375px" borderRadius="5px" color="black">
                        Get it now!
                    </Button>
                </Box>
            </Box>
            <Box 
            bg="white"
            borderRadius="15px"
            height={{ base: "100px" , lg : "150px" , xl : "480px"}}>
                <Box p="10px">
                    <Img aspectRatio={16/9} src="../../img/Image5.png" maxWidth="380px"></Img>
                </Box>
                <Box>
                    <HStack p="10px">
                        <Box border="1px solid whitesmoke" h="20px" w="60px" borderRadius="4px"><Text fontSize="12px" w="50px" ml="4px">10 weeks</Text></Box>
                        <Box border="1px solid whitesmoke" h="20px" w="78px" borderRadius="4px"><Text fontSize="12px" w="68px" ml="4px">Intermediate</Text></Box>
                    </HStack>
                </Box>
                <Box px="12px" pt="10px">
                    <Text fontSize="20px" fontWeight="semibold">Front-End Web Development</Text>
                </Box>
                <Box  px="12px" pt="10px">
                    <Text fontSize="15px" maxWidth="340px">Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.</Text>
                </Box>
                <Box px="12px" pt="20px">
                    <Button h="35px" w="375px" borderRadius="5px" color="black">
                        Get it now!
                    </Button>
                </Box>
            </Box>
            <Box 
            bg="white"
            borderRadius="15px"
            height={{ base: "100px" , lg : "150px" , xl : "480px"}}>
                <Box p="10px">
                    <Img aspectRatio={16/9} src="../../img/Image6.png" maxWidth="380px"></Img>
                </Box>
                <Box>
                    <HStack p="10px">
                        <Box border="1px solid whitesmoke" h="20px" w="55px" borderRadius="4px"><Text fontSize="12px" w="45px" ml="4px">6 weeks</Text></Box>
                        <Box border="1px solid whitesmoke" h="20px" w="60px" borderRadius="4px"><Text fontSize="12px" w="50px" ml="4px">Advance</Text></Box>
                    </HStack>
                </Box>
                <Box px="12px" pt="10px">
                    <Text fontSize="20px" fontWeight="semibold">Advanced JavaScript</Text>
                </Box>
                <Box  px="12px" pt="10px">
                    <Text fontSize="15px" maxWidth="340px">Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.</Text>
                </Box>
                <Box px="12px" pt="20px">
                    <Button h="35px" w="375px" borderRadius="5px" color="black">
                        Get it now!
                    </Button>
                </Box>
            </Box>
        </SimpleGrid>
    </Box>
  )
}