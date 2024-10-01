import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Tv() {
let [tv,setTv]=useState([]);

 async function TvTrend() {
    let{data}= await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=44ee5523e457e74020effc2bddc4592e`)
  console.log(data.results);
  setTv(data.results)
  }

  useEffect(()=>{
    TvTrend()
  },[])
  return <>
   <div className="container mt-5">
    <div className="row">
      {tv.map((ele)=><div className="col-md-3">
        <div className=" position-relative">
<img src={'https://image.tmdb.org/t/p/w500/'+ele.poster_path} className='w-100' alt="" />
<h3>{ele.name}</h3>
</div>
      </div>

    )}
    </div>
  </div>
  </>
}
