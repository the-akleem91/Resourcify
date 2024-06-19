import { Outlet } from "react-router-dom"
import { Box } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
export default function RootLayout() {
  return (
    
      <Box w="100%">
        <Navbar />
        <Outlet />
        <Footer />
      </Box>
      
  )
}
