import {Flex, Box, HStack, Button, Spacer, Heading, Image, Text} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

export default function Head(){
  return (
    <Box align="center" bg="whitesmoke">
        <HStack w="90%" borderBottom="1px solid gray">
            <Box p="5%" w="30%">
                <Text fontWeight="bolder" fontSize={{base : "20px", lg : "30px", xl : "40px"}}>Our Pricing</Text>
            </Box>
            <Box p="3%" w="70%">
                <Text fontSize={{base : "8px", lg : "10px", xl : "15px"}}>Welcome to Resourcify's Pricing Plan page, where we offer four comprehensive options to cater to your needs: Start, Pro, Business, and Special. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.</Text>
            </Box>
        </HStack> 
    </Box>
  )
}