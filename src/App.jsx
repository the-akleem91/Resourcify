import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Pricingpage from './pages/Pricing'
import Contact from './pages/Contact'
import Course from './pages/Courses'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Coursedetails from './pages/coursedetails'
import { taskLoader } from './pages/coursedetails'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="pricing" element={<Pricingpage />} />
      <Route path="courses" element={<Course />} />
      <Route path="courses/:courseId" element={<Coursedetails />}  loader={taskLoader}/>
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
