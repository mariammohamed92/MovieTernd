import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout/Layout'
import Movie from './component/Movie/Movie'
import Tv from './component/Tv/Tv'
import People from './component/People/People'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import Logout from './component/Logout/Logout'
import Home from './component/Home/Home'
import DetailesMovie from './component/Detailes/DetailesMovie'
import DetailesTv from './component/Detailes/DetailesTv'
import { jwtDecode } from "jwt-decode";

export default function App() {
  let [logindata,setLoginDate]=useState(null)

  function savaLoginData() {
    let encodedToken=localStorage.getItem('token');
    let decodedToken= jwtDecode(encodedToken);
    console.log(decodedToken);
    setLoginDate(decodedToken)
    
  }

  useEffect(()=>{
    if (localStorage.getItem("token")) {
      savaLoginData()
  
    }
  },[])
  
  
  
  let routers=createBrowserRouter([
    {path:"",element:<Layout logindata={logindata} setLoginDate={setLoginDate} />,children:[
      {path:"home",element:<Home/>},
      {path:"movie",element:<Movie/>},
      {path:"tv",element:<Tv/>},
      {path:"people",element:<People/>},
      {path:'detailsmoviee/:id' , element: <DetailesMovie/>},
      {path:'detailstv/:id' , element: <DetailesTv/>},
      {index:true,element:<Login/>},
      {path:"login",element:<Login/>},
      {path:"register",element:<Register/>},
      {path:"logout",element:<Logout/>},

    ]}
  ])
  return<>
  <RouterProvider router={routers}></RouterProvider>
  </>
}
