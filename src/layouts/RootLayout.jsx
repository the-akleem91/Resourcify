import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  const location = useLocation();

  const hideNavbarPaths = ["/login", "/signup"];
  const hideFooterPaths = ["/login","/signup"];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <Box w="100%">
      {!shouldHideNavbar && <Navbar />}
      <Outlet />
      {!shouldHideNavbar && <Footer />}
    </Box>
  );
}