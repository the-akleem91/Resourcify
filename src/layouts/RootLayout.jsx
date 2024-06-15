import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { Grid,GridItem } from "@chakra-ui/react"

export default function RootLayout() {
  return (
    <Grid templateColumns= "repeat(6,1fr)" bg="gray.300">
      <GridItem as="aside" 
      colSpan={{ base: 6 , lg : 2 , xl : 1}} 
      minHeight={{base: "50px" ,lg :"100vh", xl: "100vh"}} 
      bg="purple.300"
      p="25px">
        <Sidebar />
      </GridItem>
      <GridItem 
      as="main" 
      colSpan={{ base: 6 , lg : 4 , xl : 5}} 
      bg="gray.100"
      p="50px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}
