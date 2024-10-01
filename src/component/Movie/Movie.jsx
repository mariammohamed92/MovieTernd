import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
export default function Movie() {
let [movie,setMovie]=useState([])

 async function MovieTrend() {
    let {data}= await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=44ee5523e457e74020effc2bddc4592e`)
  console.log(data.results);
  setMovie(data.results)
  
  }

useEffect(()=>{
  MovieTrend()
},[])
  return<>
  <div className="container">
    <div className="row">
      {movie.map((item)=><div className="col-md-3">
        <Link to={`/detailsmoviee/${item.id}`} className=' text-decoration-none'>

        <div className="position-relative">
        <img src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} className='w-100' alt="" />
      
      <div className="imgLayer">
        <div className="imginfo">
          <h6>{item.title}</h6>
        </div>
      </div>
        <h3>{item.title}</h3>

        {item.vote_average?
        <div className="bg-info p-2 text-white position-absolute top-0 end-0">
          {item.vote_average?.toFixed(1)}</div>:''}
        </div>
        </Link>
      </div>)}
    
    </div>
  </div>
  
  </>
}