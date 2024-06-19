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
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Courses from './pages/Courses'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="courses" element={<Courses />} />
      <Route path="contact" element={<Contact />} />

    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
