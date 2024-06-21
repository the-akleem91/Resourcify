import { Box , Button, Icon, HStack, SimpleGrid, Text ,AspectRatio} from '@chakra-ui/react';
import { MdArrowOutward } from 'react-icons/md';
import { CiAlarmOn } from "react-icons/ci";
import React from 'react'

function Coursedetails() {
  return (
    <Box>
        <Box align="center" bg="whitesmoke">
            <HStack w="90%" borderBottom="1px solid gray">
                <Box p="5%" w="30%">
                    <Text fontWeight="bolder" fontSize={{base : "20px", lg : "30px", xl : "40px"}}>UI/UX Design Course</Text>
                </Box>
                <Box p="3%" w="70%">
                    <Text fontSize={{base : "8px", lg : "10px", xl : "15px"}}>Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum.</Text>
                </Box>
            </HStack> 
        </Box>
        <Box bg="whitesmoke">
            <AspectRatio  maxWidth="1300px" ratio={16/9} m="100px">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6yN2ZG_TaGM?si=IMDs3IGIL8SAJ1Kh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </AspectRatio> 
        </Box> 
        <Box align="center" bg="whitesmoke" py="2%">
            <SimpleGrid p="10px" spacing={10} maxWidth={"90%"} minChildWidth={{ base: "100px" , lg : "150px" , xl : "550px"}}  >
                <Box 
                bg="white"
                borderRadius="15px"
                height={{ base: "100px" , lg : "150px" , xl : "500px"}} >
                    <Box>
                        <Text align="right" pt="5px" fontSize="60px" fontWeight="bolder" mr="3%">01</Text>
                    </Box>
                    <Box>
                        <Text ml="30px" fontSize="25px" fontWeight="bold" align="left">Introduction to UI/UX Design</Text>
                    </Box>
                    <Box border="1px solid #F1F1F3" mx="7%" my="3%" borderRadius="5px">
                        <HStack p="2%" justifyContent="space-between">
                            <Box align="left">
                                <Text fontWeight="semibold" fontSize="20px">Understanding UI/UX Design Principles</Text>
                                <Text fontWeight="thin" fontSize="15px">Lesson 01</Text>
                            </Box>
                            <Box>
                                <Button>
                                    <Icon as={CiAlarmOn}></Icon>
                                    <Text>1 Hour</Text>
                                </Button>
                            </Box>
                        </HStack>
                    </Box>
                    <Box border="1px solid #F1F1F3" mx="7%" my="3%" borderRadius="5px">
                        <HStack p="2%" justifyContent="space-between">
                            <Box align="left">
                                <Text fontWeight="semibold" fontSize="20px">Importance of User-Centered Design</Text>
                                <Text fontWeight="thin" fontSize="15px">Lesson 02</Text>
                            </Box>
                            <Box>
                                <Button>
                                    <Icon as={CiAlarmOn}></Icon>
                                    <Text>45 Min</Text>
                                </Button>
                            </Box>
                        </HStack>
                    </Box>
                    <Box border="1px solid #F1F1F3" mx="7%" my="3%" borderRadius="5px">
                        <HStack p="2%" justifyContent="space-between">
                            <Box align="left">
                                <Text fontWeight="semibold" fontSize="20px">The Role of UI/UX Design in Product Development</Text>
                                <Text fontWeight="thin" fontSize="15px">Lesson 03</Text>
                            </Box>
                            <Box>
                                <Button>
                                    <Icon as={CiAlarmOn}></Icon>
                                    <Text>1 Hour</Text>
                                </Button>
                            </Box>
                        </HStack>
                    </Box>             
                </Box>
                <Box 
                bg="white"
                borderRadius="15px"
                height={{ base: "100px" , lg : "150px" , xl : "500px"}} >
                    <Box>
                        <Text align="right" pt="5px" fontSize="60px" fontWeight="bolder" mr="3%">02</Text>
                    </Box>
                    <Box>
                        <Text ml="30px" fontSize="25px" fontWeight="bold" align="left">User Research and Analysis</Text>
                    </Box>
                    <Box border="1px solid #F1F1F3" mx="7%" my="3%" borderRadius="5px">
                        <HStack p="2%" justifyContent="space-between">
                            <Box align="left">
                                <Text fontWeight="semibold" fontSize="20px">Analyzing User Needs and Behavior</Text>
                                <Text fontWeight="thin" fontSize="15px">Lesson 01</Text>
                            </Box>
                            <Box>
                                <Button>
                                    <Icon as={CiAlarmOn}></Icon>
                                    <Text>45 Min</Text>
                                </Button>
                            </Box>
                        </HStack>
                    </Box>
                    <Box border="1px solid #F1F1F3" mx="7%" my="3%" borderRadius="5px">
                        <HStack p="2%" justifyContent="space-between">
                            <Box align="left">
                                <Text fontWeight="semibold" fontSize="20px">Conducting User Research and Interviews</Text>
                                <Text fontWeight="thin" fontSize="15px">Lesson 02</Text>
                            </Box>
                            <Box>
                                <Button>
                                    <Icon as={CiAlarmOn}></Icon>
                                    <Text>1 Hour</Text>
                                </Button>
                            </Box>
                        </HStack>
                    </Box>
                    <Box border="1px solid #F1F1F3" mx="7%" my="3%" borderRadius="5px">
                        <HStack p="2%" justifyContent="space-between">
                            <Box align="left">
                                <Text fontWeight="semibold" fontSize="20px">Creating User Personas and Scenarios</Text>
                                <Text fontWeight="thin" fontSize="15px">Lesson 03</Text>
                            </Box>
                            <Box>
                                <Button>
                                    <Icon as={CiAlarmOn}></Icon>
                                    <Text>45 Min</Text>
                                </Button>
                            </Box>
                        </HStack>
                    </Box>             
                </Box>
                <Box 
                bg="white"
                borderRadius="15px"
                height={{ base: "100px" , lg : "150px" , xl : "500px"}} >
                    <Box>
                        <Text align="right" pt="5px" fontSize="60px" fontWeight="bolder" mr="3%">03</Text>
                    </Box>
                    <Box>
                        <Text ml="30px" fontSize="25px" fontWeight="bold" align="left">Wireframing and Prototyping</Text>
                    </Box>
                    <Box border="1px solid #F1F1F3" mx="7%" my="3%" borderRadius="5px">
                        <HStack p="2%" justifyContent="space-between">
                            <Box align="left">
                                <Text fontWeight="semibold" fontSize="20px">Introduction to Wireframing Tools and Techniques</Text>
                                <Text fontWeight="thin" fontSize="15px">Lesson 01</Text>
                            </Box>
                            <Box>
                                <Button>
                                    <Icon as={CiAlarmOn}></Icon>
                                    <Text>1 Hour</Text>
                                </Button>
                            </Box>
                        </HStack>
                    </Box>
                    <Box border="1px solid #F1F1F3" mx="7%" my="3%" borderRadius="5px">
                        <HStack p="2%" justifyContent="space-between">
                            <Box align="left">
                                <Text fontWeight="semibold" fontSize="20px">Creating Low-Fidelity Wireframes</Text>
                                <Text fontWeight="thin" fontSize="15px">Lesson 02</Text>
                            </Box>
                            <Box>
                                <Button>
                                    <Icon as={CiAlarmOn}></Icon>
                                    <Text>1 Hour</Text>
                                </Button>
                            </Box>
                        </HStack>
                    </Box>
                    <Box border="1px solid #F1F1F3" mx="7%" my="3%" borderRadius="5px">
                        <HStack p="2%" justifyContent="space-between">
                            <Box align="left">
                                <Text fontWeight="semibold" fontSize="20px">Prototyping and Interactive Mockups</Text>
                                <Text fontWeight="thin" fontSize="15px">Lesson 03</Text>
                            </Box>
                            <Box>
                                <Button>
                                    <Icon as={CiAlarmOn}></Icon>
                                    <Text>45 Min</Text>
                                </Button>
                            </Box>
                        </HStack>
                    </Box>             
                </Box>
                <Box 
                bg="white"
                borderRadius="15px"
                height={{ base: "100px" , lg : "150px" , xl : "500px"}} >
                    <Box>
                        <Text align="right" pt="5px" fontSize="60px" fontWeight="bolder" mr="3%">04</Text>
                    </Box>
                    <Box>
                        <Text ml="30px" fontSize="25px" fontWeight="bold" align="left">Visual Design and Branding</Text>
                    </Box>
                    <Box border="1px solid #F1F1F3" mx="7%" my="3%" borderRadius="5px">
                        <HStack p="2%" justifyContent="space-between">
                            <Box align="left">
                                <Text fontWeight="semibold" fontSize="20px">Color Theory and Typography in UI Design</Text>
                                <Text fontWeight="thin" fontSize="15px">Lesson 01</Text>
                            </Box>
                            <Box>
                                <Button>
                                    <Icon as={CiAlarmOn}></Icon>
                                    <Text>1 Hour</Text>
                                </Button>
                            </Box>
                        </HStack>
                    </Box>
                    <Box border="1px solid #F1F1F3" mx="7%" my="3%" borderRadius="5px">
                        <HStack p="2%" justifyContent="space-between">
                            <Box align="left">
                                <Text fontWeight="semibold" fontSize="20px">Visual Hierarchy and Layout Design</Text>
                                <Text fontWeight="thin" fontSize="15px">Lesson 02</Text>
                            </Box>
                            <Box>
                                <Button>
                                    <Icon as={CiAlarmOn}></Icon>
                                    <Text>45 Min</Text>
                                </Button>
                            </Box>
                        </HStack>
                    </Box>
                    <Box border="1px solid #F1F1F3" mx="7%" my="3%" borderRadius="5px">
                        <HStack p="2%" justifyContent="space-between">
                            <Box align="left">
                                <Text fontWeight="semibold" fontSize="20px">Creating a Strong Brand Identity</Text>
                                <Text fontWeight="thin" fontSize="15px">Lesson 03</Text>
                            </Box>
                            <Box>
                                <Button>
                                    <Icon as={CiAlarmOn}></Icon>
                                    <Text>1 Hour</Text>
                                </Button>
                            </Box>
                        </HStack>
                    </Box>             
                </Box>
                <Box 
                bg="white"
                borderRadius="15px"
                height={{ base: "100px" , lg : "150px" , xl : "500px"}} >
                    <Box>
                        <Text align="right" pt="5px" fontSize="60px" fontWeight="bolder" mr="3%">01</Text>
                    </Box>
                    <Box>
                        <Text ml="30px" fontSize="25px" fontWeight="bold" align="left">Usability Testing and Iteration</Text>
                    </Box>
                    <Box border="1px solid #F1F1F3" mx="7%" my="3%" borderRadius="5px">
                        <HStack p="2%" justifyContent="space-between">
                            <Box align="left">
                                <Text fontWeight="semibold" fontSize="20px">Usability Testing Methods and Techniques</Text>
                                <Text fontWeight="thin" fontSize="15px">Lesson 01</Text>
                            </Box>
                            <Box>
                                <Button>
                                    <Icon as={CiAlarmOn}></Icon>
                                    <Text>1 Hour</Text>
                                </Button>
                            </Box>
                        </HStack>
                    </Box>
                    <Box border="1px solid #F1F1F3" mx="7%" my="3%" borderRadius="5px">
                        <HStack p="2%" justifyContent="space-between">
                            <Box align="left">
                                <Text fontWeight="semibold" fontSize="20px">Analyzing Usability Test Results</Text>
                                <Text fontWeight="thin" fontSize="15px">Lesson 02</Text>
                            </Box>
                            <Box>
                                <Button>
                                    <Icon as={CiAlarmOn}></Icon>
                                    <Text>45 Min</Text>
                                </Button>
                            </Box>
                        </HStack>
                    </Box>
                    <Box border="1px solid #F1F1F3" mx="7%" my="3%" borderRadius="5px">
                        <HStack p="2%" justifyContent="space-between">
                            <Box align="left">
                                <Text fontWeight="semibold" fontSize="20px">Iterating and Improving UX Designs</Text>
                                <Text fontWeight="thin" fontSize="15px">Lesson 03</Text>
                            </Box>
                            <Box>
                                <Button>
                                    <Icon as={CiAlarmOn}></Icon>
                                    <Text>45 Min</Text>
                                </Button>
                            </Box>
                        </HStack>
                    </Box>             
                </Box>
            </SimpleGrid>  
        </Box>      
    </Box>
  )
}

export default Coursedetails

