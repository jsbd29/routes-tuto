import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';

const router = createBrowserRouter([
{
  path: '/',
  element: <Home/>,
  errorElement: <NotFoundPage/>
},
{
  path: '/about',
  element: <About/>

},
{
  path: '/user',
  element: <Users/>

},
{
  path:'/userDetails',
  element:<UserDetails/>
}
])



createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>
  

)