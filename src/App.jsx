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
import Signup from './pages/Signup';
import Coursedetails from './pages/Coursedetails';
import User from './pages/User';
import Forgotpassword from './pages/Forgotpassword';
import Resetpassword from './pages/ResetPassword'


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
      <Route path="user" element={<User />} />
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
