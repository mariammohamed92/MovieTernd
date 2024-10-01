// yup formik axios
import React from 'react'
import {useFormik} from 'formik';
import axios from 'axios'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  let navigate = useNavigate();

  async function RegisterForm(values) {

    let {data}= await axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signUp`,values)
console.log(data);
navigate('/login')
  
  }


  let validationSchema = Yup.object({
    name:Yup.string().max(15,"name should be less that 15").required("name is Required"),
    email:Yup.string().email('Invalid email address').required('email is Required'),
    password:Yup.string().matches(/^[A-z][a-z0-9]{5,8}$/,"Password should start with capital").required('Password is Required'),
    age: Yup.string().max(2,'inter your age').required("your age is Required"),
    phone:Yup.string().matches(/^01[0125][0-9]{8}$/,"Phone is invaild").required('Phone is Required'),

})

  let Formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
      age:"",
      phone:"",
    },
    validationSchema:validationSchema,
    onSubmit:(values)=>RegisterForm(values)
    
  })

  return <>
    <div className="container my-5">
    <h2 className=' mb-3 text-center'>Register Now </h2>

    <form onSubmit={Formik.handleSubmit}>
  <div className="form-group mb-3">
    <label htmlFor="name " className="mb-3 fw-bolder fs-5">Name</label> 
    <input type="text" id="name"
    value={Formik.values.name}
    onChange={Formik.handleChange}
    name='name' className=" form-control" />
      {Formik.errors.name&&Formik.touched.name?<div className='alert alert-danger'>{Formik.errors.name}</div>:""}

  </div>

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
    <input type="password" id="password"
        value={Formik.values.password}
        onChange={Formik.handleChange}
    
    name='password' className=" form-control" />
      {Formik.errors.password&&Formik.touched.password?<div className='alert alert-danger'>{Formik.errors.password}</div>:""}

  </div>
  <div className="form-group mb-3">
    <label htmlFor="age" className="mb-3 fw-bolder fs-5">Age</label>
    <input type="number" id="age"
        value={Formik.values.age}
        onChange={Formik.handleChange}
    
    name='age' className=" form-control" />
          {Formik.errors.age&&Formik.touched.age?<div className='alert alert-danger'>{Formik.errors.age}</div>:""}

  </div>
  <div className="form-group mb-3">
    <label htmlFor="phone" className="mb-3 fw-bolder fs-5">Phone</label>
    <input type="tel" id="phone"
        value={Formik.values.phone}
        onChange={Formik.handleChange}
    
    name='phone' className=" form-control" />
{Formik.errors.phone&&Formik.touched.phone?<div className='alert alert-danger'>{Formik.errors.phone}</div>:""} 

  </div>

  <button type="submit" className=" btn btn-outline-info">Register</button>

  </form>
</div>
  </>
}
