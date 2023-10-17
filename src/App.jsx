import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login/Login';
import RegisterPage from './pages/register/Register';
import ContactPage from './pages/contact/Contact';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';

const Layout =()=>{
  return(
    <div className='layout-app'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <div>404 not found</div>,

      children: [
        {index: true, element:<Home/>},
        {
          path:'contact',
          element: <ContactPage/>
        }
      ]
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/register",
      element: <RegisterPage/>,
    },
  ]);
  return (
   <>
   <RouterProvider router={router} />
   
   </>
  );
}
