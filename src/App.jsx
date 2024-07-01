import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Pricingpage from './pages/pricing/Pricing'
import Contact from './pages/contact/Contact'
import Course from './pages/courses/Courses'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup';
import Coursedetails from './pages/courses/details/Coursedetails';
import Forgotpassword from './pages/login/Forgotpassword';
import Resetpassword from './pages/login/ResetPassword'


// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="pricing" element={<Pricingpage />} />
      <Route path="courses" element={<Course />} />
      <Route path="courses/:id" element={<Coursedetails />}/>
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path='forgotPassword' element={<Forgotpassword />} />
      <Route path='resetPassword/:token' element={<Resetpassword />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
