import { Box ,AspectRatio} from "@chakra-ui/react";
import HeroHome from "../components/HeroHome";
import IconApp from "../components/Comp";
import Benefits from "../components/Benefits";
import OurCourses from "../components/OurCourses";
import OurTestimonials from "../components/Testimonials"; 
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <Box bg="whitesmoke" minHeight="1150px" maxHeight="8000px" alignContent="center">
        <HeroHome></HeroHome>
        <IconApp></IconApp> 
        <AspectRatio  maxWidth="1300px" ratio={16/9} m="100px">
          <iframe src="../../img/Eduvid.mp4" frameborder="1"></iframe>
        </AspectRatio>  
        <Benefits></Benefits>
        <OurCourses></OurCourses>
        <OurTestimonials></OurTestimonials>  
        <Pricing></Pricing>
        <FAQ></FAQ>
    </Box>
  )
}
