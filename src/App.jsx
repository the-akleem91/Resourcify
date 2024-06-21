import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Pricingpage from './pages/Pricing'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Coursedetails from './pages/Coursedetails'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="pricing" element={<Pricingpage />} />
      <Route path="courses" element={<Courses />} />
      <Route path="/courses/1" element={<Coursedetails />} />
      <Route path="/courses/2" element={<Coursedetails />} />
      <Route path="/courses/3" element={<Coursedetails />} />
      <Route path="/courses/4" element={<Coursedetails />} />
      <Route path="/courses/5" element={<Coursedetails />} />
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

export default App
