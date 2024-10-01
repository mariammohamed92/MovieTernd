import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function People() {
let [person,setPerson]=useState([])
  async function people() {
    let{data} =await axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=44ee5523e457e74020effc2bddc4592e`)
  console.log(data.results);
  setPerson(data.results)
  }

  useEffect(()=>{
    people()
  },[])
  return <>
   <div className="container mt-5">
    <div className="row">
      {person.map((ele)=><div className="col-md-3">
<img src={'https://image.tmdb.org/t/p/w500/'+ele.profile_path} className='w-100' alt="" />
<h3>{ele.name}</h3>

      </div>

    )}
    </div>
  </div>
  </>
}
