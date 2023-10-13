// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Pages/Login';
import Register from './Pages/Register';
import HomePage from './Pages/HomePage';


const router = createBrowserRouter([
   {
    path : "/",
    element:<HomePage/>

   },
   {
    path : "/login",
    element:<Login />

   },
   {
    path : "/register",
    element:<Register/>

   },
])

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
