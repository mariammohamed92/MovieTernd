import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import {Outlet,useNavigate} from 'react-router-dom';

export default function Layout({logindata,setLoginDate}) {

  let navigate=useNavigate()

  function Logout() {
    localStorage.removeItem("token")
    setLoginDate(null)
    navigate("/login")
  }



  return <>
  <Navbar logindata={logindata} Logout={Logout}/>
  <Outlet/>
  <Footer/>
  
  </>
}
