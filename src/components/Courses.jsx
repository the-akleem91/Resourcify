import { Box , Button, Center, ChakraProvider, Grid, Link, Icon, SimpleGrid , Text , Img, HStack} from "@chakra-ui/react";
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Courses() {
  return (
    <Box align="center" bg="whitesmoke">
       
        <SimpleGrid p="10px" spacing={10} maxWidth="1300px" minChildWidth= "90%">
            <Box 
            bg="white"
            borderRadius="15px"
            height={{ base: "100px" , lg : "150px" , xl : "780px"}}
            pt="1.5%" mt="2%">
                <ChakraProvider>
                    <Text fontSize="30px" fontWeight="semibold" align="left" pl="2%">
                        Web Design Fundamentals
                    </Text>
                    <SimpleGrid p="10px" spacing={10} maxWidth="1300px" minChildWidth={{ base: "100px" , lg : "150px" , xl : "550px"}}>
                        <Box 
                        width={{base: "50px" , lg : "150px" , xl : "1000px"}}
                        height={{ base: "50px" , lg : "75px" , xl : "80px"}}
                        align="left"
                        pl="2%"><Text>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</Text></Box>
                        <Box
                        height={{ base: "50px" , lg : "75px" , xl : "100px"}}
                        ml="450px"><Button><NavLink to="/courses/1">View Course</NavLink></Button></Box>
                    </SimpleGrid>
                </ChakraProvider>
                <HStack pl="2%">
                    <Img aspectRatio={4/3} src="../../img/Image1.png" maxWidth="400px"></Img>
                    <Img aspectRatio={4/3} src="../../img/Image12.png" maxWidth="400px"></Img>
                    <Img aspectRatio={4/3} src="../../img/Image13.png" maxWidth="400px"></Img>
                </HStack>
                <Box>
                    <HStack p="10px">
                        <Box border="1px solid gray.50" h="20px" w="55px" borderRadius="4px"><Text fontSize="12px" w="45px" ml="4px">4 weeks</Text></Box>
                        <Box border="1px solid gray.50" h="20px" w="58px" borderRadius="4px"><Text fontSize="12px" w="48px" ml="4px">Beginner</Text></Box>
                    </HStack>
                </Box>
                <Box pl="2%">
                    <Text align="left" fontSize="20px" fontWeight="semibold">Curriculum</Text>
                </Box>
                <HStack pl="2%">
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">01</Text>
                        </Box>
                        <Box align="left">
                            <Text>Introduction to HTML</Text>
                        </Box>
                    </Box>
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">02</Text>
                        </Box>
                        <Box align="left">
                            <Text>Styling with CSS</Text>
                        </Box>
                    </Box>
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">03</Text>
                        </Box>
                        <Box align="left">
                            <Text>Introduction to Responsive Design</Text>
                        </Box>
                    </Box>
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">04</Text>
                        </Box>
                        <Box align="left">
                            <Text>Design Principles for Web</Text>
                        </Box>
                    </Box>
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">05</Text>
                        </Box>
                        <Box>
                            <Text align="left">Building a Basic Website</Text>
                        </Box>
                    </Box>
                </HStack>
            </Box>
            <Box 
            bg="white"
            borderRadius="15px"
            height={{ base: "100px" , lg : "150px" , xl : "780px"}}
            pt="1.5%">
                <ChakraProvider>
                    <Text fontSize="30px" fontWeight="semibold" align="left" pl="2%">
                        UI/UX Design
                    </Text>
                    <SimpleGrid p="10px" spacing={10} maxWidth="1300px" minChildWidth={{ base: "100px" , lg : "150px" , xl : "550px"}}>
                        <Box 
                        width={{base: "50px" , lg : "150px" , xl : "1000px"}}
                        height={{ base: "50px" , lg : "75px" , xl : "80px"}}
                        align="left"
                        pl="2%"><Text>Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.</Text></Box>
                        <Box
                        height={{ base: "50px" , lg : "75px" , xl : "100px"}}
                        ml="450px"><Button><NavLink to="/courses/2">View Course</NavLink></Button></Box>
                    </SimpleGrid>
                </ChakraProvider>
                <HStack pl="2%">
                    <Img aspectRatio={4/3} src="../../img/Image.png" maxWidth="400px"></Img>
                    <Img aspectRatio={4/3} src="../../img/Image22.png" maxWidth="400px"></Img>
                    <Img aspectRatio={4/3} src="../../img/Image23.png" maxWidth="400px"></Img>
                </HStack>
                <Box>
                    <HStack p="10px">
                        <Box border="1px solid gray.50" h="20px" w="55px" borderRadius="4px"><Text fontSize="12px" w="45px" ml="4px">4 weeks</Text></Box>
                        <Box border="1px solid gray.50" h="20px" w="58px" borderRadius="4px"><Text fontSize="12px" w="48px" ml="4px">Beginner</Text></Box>
                    </HStack>
                </Box>
                <Box pl="2%">
                    <Text align="left" fontSize="20px" fontWeight="semibold">Curriculum</Text>
                </Box>
                <HStack pl="2%">
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">01</Text>
                        </Box>
                        <Box align="left">
                            <Text>Introduction to UI/UX Design</Text>
                        </Box>
                    </Box>
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">02</Text>
                        </Box>
                        <Box align="left">
                            <Text>User Research and Personas</Text>
                        </Box>
                    </Box>
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">03</Text>
                        </Box>
                        <Box align="left">
                            <Text>Wireframing and Prototyping</Text>
                        </Box>
                    </Box>
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">04</Text>
                        </Box>
                        <Box align="left">
                            <Text>Visual Design and Branding</Text>
                        </Box>
                    </Box>
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">05</Text>
                        </Box>
                        <Box>
                            <Text align="left">Usability Testing and Iteration</Text>
                        </Box>
                    </Box>
                </HStack>
            </Box>
            <Box 
            bg="white"
            borderRadius="15px"
            height={{ base: "100px" , lg : "150px" , xl : "780px"}}
            pt="1.5%">
                <ChakraProvider>
                    <Text fontSize="30px" fontWeight="semibold" align="left" pl="2%">
                        Mobile App Development
                    </Text>
                    <SimpleGrid p="10px" spacing={10} maxWidth="1300px" minChildWidth={{ base: "100px" , lg : "150px" , xl : "550px"}}>
                        <Box 
                        width={{base: "50px" , lg : "150px" , xl : "1000px"}}
                        height={{ base: "50px" , lg : "75px" , xl : "80px"}}
                        align="left"
                        pl="2%"><Text>Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.</Text></Box>
                        <Box
                        height={{ base: "50px" , lg : "75px" , xl : "100px"}}
                        ml="450px"><Button><NavLink to="/courses/3">View Course</NavLink></Button></Box>
                    </SimpleGrid>
                </ChakraProvider>
                <HStack pl="2%">
                    <Img aspectRatio={4/3} src="../../img/Image3.png" maxWidth="400px"></Img>
                    <Img aspectRatio={4/3} src="../../img/Image32.png" maxWidth="400px"></Img>
                    <Img aspectRatio={4/3} src="../../img/Image33.png" maxWidth="400px"></Img>
                </HStack>
                <Box>
                    <HStack p="10px">
                        <Box border="1px solid gray.50" h="20px" w="55px" borderRadius="4px"><Text fontSize="12px" w="45px" ml="4px">4 weeks</Text></Box>
                        <Box border="1px solid gray.50" h="20px" w="58px" borderRadius="4px"><Text fontSize="12px" w="48px" ml="4px">Beginner</Text></Box>
                    </HStack>
                </Box>
                <Box pl="2%">
                    <Text align="left" fontSize="20px" fontWeight="semibold">Curriculum</Text>
                </Box>
                <HStack pl="2%">
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">01</Text>
                        </Box>
                        <Box align="left">
                            <Text>Introduction to Mobile App Development</Text>
                        </Box>
                    </Box>
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">02</Text>
                        </Box>
                        <Box align="left">
                            <Text>Fundamentals of Swift Programming (iOS)</Text>
                        </Box>
                    </Box>
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">03</Text>
                        </Box>
                        <Box align="left">
                            <Text>Fundamentals of Kotlin Programming (Android)</Text>
                        </Box>
                    </Box>
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">04</Text>
                        </Box>
                        <Box align="left">
                            <Text>Building User Interfaces</Text>
                        </Box>
                    </Box>
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">05</Text>
                        </Box>
                        <Box>
                            <Text align="left">App Deployment and Testing</Text>
                        </Box>
                    </Box>
                </HStack>
            </Box>
            <Box 
            bg="white"
            borderRadius="15px"
            height={{ base: "100px" , lg : "150px" , xl : "780px"}}
            pt="1.5%">
                <ChakraProvider>
                    <Text fontSize="30px" fontWeight="semibold" align="left" pl="2%">
                        Graphic Design for Beginners
                    </Text>
                    <SimpleGrid p="10px" spacing={10} maxWidth="1300px" minChildWidth={{ base: "100px" , lg : "150px" , xl : "550px"}}>
                        <Box 
                        width={{base: "50px" , lg : "150px" , xl : "1000px"}}
                        height={{ base: "50px" , lg : "75px" , xl : "80px"}}
                        align="left"
                        pl="2%"><Text>Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.</Text></Box>
                        <Box
                        height={{ base: "50px" , lg : "75px" , xl : "100px"}}
                        ml="450px"><Button><NavLink to="/courses/4">View Course</NavLink></Button></Box>
                    </SimpleGrid>
                </ChakraProvider>
                <HStack pl="2%">
                    <Img aspectRatio={4/3} src="../../img/Image4.png" maxWidth="400px"></Img>
                    <Img aspectRatio={4/3} src="../../img/Image42.png" maxWidth="400px"></Img>
                    <Img aspectRatio={4/3} src="../../img/Image43.png" maxWidth="400px"></Img>
                </HStack>
                <Box>
                    <HStack p="10px">
                        <Box border="1px solid gray.50" h="20px" w="55px" borderRadius="4px"><Text fontSize="12px" w="45px" ml="4px">4 weeks</Text></Box>
                        <Box border="1px solid gray.50" h="20px" w="58px" borderRadius="4px"><Text fontSize="12px" w="48px" ml="4px">Beginner</Text></Box>
                    </HStack>
                </Box>
                <Box pl="2%">
                    <Text align="left" fontSize="20px" fontWeight="semibold">Curriculum</Text>
                </Box>
                <HStack pl="2%">
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">01</Text>
                        </Box>
                        <Box align="left">
                            <Text>Introduction to Graphic Design</Text>
                        </Box>
                    </Box>
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">02</Text>
                        </Box>
                        <Box align="left">
                            <Text>Typography and Color Theory</Text>
                        </Box>
                    </Box>
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">03</Text>
                        </Box>
                        <Box align="left">
                            <Text>Layout Design and Composition</Text>
                        </Box>
                    </Box>
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">04</Text>
                        </Box>
                        <Box align="left">
                            <Text>Image Editing and Manipulation</Text>
                        </Box>
                    </Box>
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">05</Text>
                        </Box>
                        <Box>
                            <Text align="left">Designing for Print and Digital Media</Text>
                        </Box>
                    </Box>
                </HStack>
            </Box>
            <Box 
            bg="white"
            borderRadius="15px"
            height={{ base: "100px" , lg : "150px" , xl : "780px"}}
            pt="1.5%"
            mb="2%">
                <ChakraProvider>
                    <Text fontSize="30px" fontWeight="semibold" align="left" pl="2%">
                    Front-End Web Development
                    </Text>
                    <SimpleGrid p="10px" spacing={10} maxWidth="1300px" minChildWidth={{ base: "100px" , lg : "150px" , xl : "550px"}}>
                        <Box 
                        width={{base: "50px" , lg : "150px" , xl : "1000px"}}
                        height={{ base: "50px" , lg : "75px" , xl : "80px"}}
                        align="left"
                        pl="2%"><Text>Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.</Text></Box>
                        <Box
                        height={{ base: "50px" , lg : "75px" , xl : "100px"}}
                        ml="450px"><Button><Link href="/courses/design">View Course</Link></Button></Box>
                    </SimpleGrid>
                </ChakraProvider>
                <HStack pl="2%">
                    <Img aspectRatio={4/3} src="../../img/Image5.png" maxWidth="400px"></Img>
                    <Img aspectRatio={4/3} src="../../img/Image52.png" maxWidth="400px"></Img>
                    <Img aspectRatio={4/3} src="../../img/Image53.png" maxWidth="400px"></Img>
                </HStack>
                <Box>
                    <HStack p="10px">
                        <Box border="1px solid gray.50" h="20px" w="55px" borderRadius="4px"><Text fontSize="12px" w="45px" ml="4px">4 weeks</Text></Box>
                        <Box border="1px solid gray.50" h="20px" w="58px" borderRadius="4px"><Text fontSize="12px" w="48px" ml="4px">Beginner</Text></Box>
                    </HStack>
                </Box>
                <Box pl="2%">
                    <Text align="left" fontSize="20px" fontWeight="semibold">Curriculum</Text>
                </Box>
                <HStack pl="2%">
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">01</Text>
                        </Box>
                        <Box align="left">
                            <Text>HTML Fundamentals</Text>
                        </Box>
                    </Box>
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">02</Text>
                        </Box>
                        <Box align="left">
                            <Text>CSS Styling and Layouts</Text>
                        </Box>
                    </Box>
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">03</Text>
                        </Box>
                        <Box align="left">
                            <Text>JavaScript Basics</Text>
                        </Box>
                    </Box>
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">04</Text>
                        </Box>
                        <Box align="left">
                            <Text>Building Responsive Websites</Text>
                        </Box>
                    </Box>
                    <Box p="20px" border="1px solid gray" borderRadius="10px"
                    h="200px"
                    w="250px"
                    mr="2%">
                        <Box align="left">
                            <Text fontSize="40px" fontWeight="bolder">05</Text>
                        </Box>
                        <Box>
                            <Text align="left">Introduction to Bootstrap and React</Text>
                        </Box>
                    </Box>
                </HStack>
            </Box>
        </SimpleGrid>
    </Box>
  )
}