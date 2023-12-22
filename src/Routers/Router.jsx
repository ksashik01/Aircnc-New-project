
import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Home/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";




export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path: "/",
            element:<Home></Home>

        },
        {
          path: "/room/:id",
          element:<RoomDetails></RoomDetails>

      }


      ]



    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<SignUp/>
    },
   
   

  ]);