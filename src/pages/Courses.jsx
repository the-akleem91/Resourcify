import { Box ,  HStack ,Text} from "@chakra-ui/react"
import { useParams } from 'react-router-dom';
import Courses from "../components/Courses"
export default function Course() {
  const {id} = useParams();
  console.log(id);
  return (
    <Box>
      <Box align="center" bg="whitesmoke">
        <HStack w="90%" borderBottom="1px solid gray">
            <Box p="5%" w="40%">
                <Text fontWeight="bolder" fontSize={{base : "17px", lg : "20px", xl : "30px"}} align="left">Online Courses on Design and Development</Text>
            </Box>
            <Box p="3%" w="70%" align="left">
                <Text fontSize={{base : "8px", lg : "10px", xl : "15px"}}>Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.</Text>
            </Box>
        </HStack> 
      </Box>
      <Courses />
    </Box>
  )
}
