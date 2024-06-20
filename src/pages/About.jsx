import { Box ,  HStack ,Text} from "@chakra-ui/react"
import Achievements from "../components/Achievements"
export default function About() {
  return (
    <Box>
      <Box align="center" bg="whitesmoke">
        <HStack w="90%" borderBottom="1px solid gray">
            <Box p="5%" w="30%">
                <Text fontWeight="bolder" fontSize={{base : "17px", lg : "30px", xl : "40px"}}>About Resourcify</Text>
            </Box>
            <Box p="3%" w="70%" align="left">
                <Text fontSize={{base : "8px", lg : "10px", xl : "15px"}}>Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.</Text>
            </Box>
        </HStack> 
      </Box>
      <Achievements />
    </Box>
  )
}
