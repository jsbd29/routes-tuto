import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from "./App";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
{
  path: '/',
  element: <App/>,
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
},
{
  path: '/home',
  element: <Home/>
}
])



createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>
  

)