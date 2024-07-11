import React from 'react';
import { Box, VStack, HStack, Icon, Image, useDisclosure, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { IoIosCompass } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useBreakpointValue} from '@chakra-ui/react';
export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sidebarWidth = useBreakpointValue({ base: "full", md: "200px" });
  const iconSize = useBreakpointValue({ base: "20px", md: "24px" });
  const direction = useBreakpointValue({ base: "row", md: "column" });

  return (
    <Box>
      <Box display={{ base: "block", md: "none" }} p="4">
        <Button onClick={isOpen ? onClose : onOpen}>
          {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </Button>
      </Box>
      
      <Box
        w={{ base: sidebarWidth, md: "200px" }}
        bg="gray.100"
        p="4"
        h={{ base: "auto", md: "100%" }}
        position={{ base: "fixed", md: "relative" }}
        bottom={{ base: 0, md: "auto" }}
        zIndex={1}
        display={{ base: isOpen ? "block" : "none", md: "block" }}
      >
        <VStack align="start" direction={direction} spacing={{ base: 2, md: 4 }}>
          <Image src="../../img/Resourcify.png" alt="Logo" maxW={{ base: "100px", md: "150px" }} />
          <HStack
            _hover={{ bg: '#E5B673', borderRight: { md: "5px solid #D88511" }, color: "gray.100" }}
            width="full"
            p="10px"
            fontWeight="bold"
            spacing={4}
          >
            <Icon as={MdSpaceDashboard} boxSize={iconSize} />
            <NavLink cursor="pointer" to='/courses'>Dashboard</NavLink>
          </HStack>
          <HStack
            _hover={{ bg: '#E5B673', borderRight: { md: "5px solid #D88511" }, color: "gray.100" }}
            width="full"
            p="10px"
            fontWeight="bold"
            spacing={4}
          >
            <Icon as={IoIosCompass} boxSize={iconSize} />
            <NavLink cursor="pointer" to='/student-browse'>Explore</NavLink>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}
