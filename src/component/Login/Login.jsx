// Newfolder/npx create-react-app my-app / install(bootstrap&react-router-dom&axios&yup&formik)
// Compontent(Layout(Navbar outlet Footer)&Login &Register&Movie&Tv&App(Path))
// Detailes
// Token
// Deploy Project
// Cv&intrerview
import React from 'react';
import {useFormik} from 'formik';
import axios from 'axios'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';

export default function Login() {
let navigate = useNavigate();

async  function LoginForm(values) {
  let {data} = await axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signIn`,values)
console.log(data);
localStorage.setItem('token',data.token)
navigate('/home')

}

  
  let validationSchema = Yup.object({
    email: Yup.string().email( 'Invalid email address').required('email is Required'),
    password: Yup.string().matches(/^[A-z][a-z0-9]{5,8}$/, "Password should start with capital").required("password is Required"),
})

  let Formik=useFormik({
    initialValues:{
      email:"",
      password:"",
    },
    validationSchema:validationSchema,
    onSubmit:(values)=>LoginForm(values)
    
    
    
  })


  return <>
   <div className="container my-5">
   <h2 className=' mb-3 text-center'>Login Now </h2>

  <form onSubmit={Formik.handleSubmit}>
  <div className="form-group mb-3">
    <label htmlFor="email " className="mb-3 fw-bolder fs-5">Email</label> 
    <input type="email" id="email" 
    value={Formik.values.email}
    onChange={Formik.handleChange}
     name='email' className=" form-control" />
  {Formik.errors.email&&Formik.touched.email?<div className='alert alert-danger'>{Formik.errors.email}</div>:""}

  </div>

  <div className="form-group mb-3">
    <label htmlFor="password" className="mb-3 fw-bolder fs-5">Password</label>
    <input type="password" id="password" name='password'
    value={Formik.values.password}
    onChange={Formik.handleChange}
    className=" form-control" />
      {Formik.errors.password&&Formik.touched.password?<div className='alert alert-danger'>{Formik.errors.password}</div>:""}

  </div>

  <button type="submit" className=" btn btn-outline-info">Login</button>

  </form>
  </div>

  </>
}
