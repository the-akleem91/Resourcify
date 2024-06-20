import { Icon, Flex,Box, Center, HStack, ChakraProvider} from "@chakra-ui/react";
import { SiZapier ,SiSpotify ,SiZoom ,SiAdobe, SiAmazon, SiNotion, SiNetflix} from "react-icons/si";

 
export default function IconApp() {
    return (
        <Box alignSelf="center" mb="100px" >
            <HStack justifyContent="space-around" marginLeft="120px" maxWidth={{base : "400px", lg : "800px", xl : "1300px" }} bg="white" p="10px" borderRadius="10px">                  
                <Icon as={SiZapier} w={14} h={14} p="5px"></Icon>
                <Icon as={SiSpotify} w={14} h={14} p="5px"></Icon>
                <Icon as={SiZoom} w={20} h={20} p="5px"></Icon>   
                <Icon as={SiAmazon} w={14} h={14} p="5px"></Icon>   
                <Icon as={SiAdobe} w={14} h={14} p="5px"></Icon>   
                <Icon as={SiNotion} w={14} h={14} p="5px"></Icon>  
                <Icon as={SiNetflix} w={14} h={14} p="5px"></Icon>   
            </HStack>
        </Box>
            
    );
};