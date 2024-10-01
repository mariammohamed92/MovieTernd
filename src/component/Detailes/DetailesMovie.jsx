/* eslint-disable no-undef */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function DetailesMovie() {
let [detailesmovie,setDetailesMovie]=useState({})

let {id}=useParams();

  async  function DetailesApi(id) {
        let {data} =await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=bd7de1002d5d536889f2190d815dc7ec`)
        console.log(data);
        setDetailesMovie(data)
        
    }

    useEffect(()=>{
        DetailesApi(id)
    },[])
  return <>
  <div className="row">
    <div className="col-md-3">
        <img src={'https://image.tmdb.org/t/p/w500/'+detailesmovie.poster_path} className='w-100' alt="" />
    </div>
    <div className="col-md-9">
        <h3 className=' h6  my-2'>{detailesmovie.title}</h3>
        <p className=' py-2 '>{detailesmovie.tagline}</p>

        <ul className=' list-unstyled d-flex'>{detailesmovie.genres?.map(genres=>
           <div className=' bg-info p-3 mx-2 rounded-2'>
            {genres.name}
           </div>
          )}
            </ul>

        <p className=' py-2'> vote : {detailesmovie?.vote_average?.toFixed(1)}</p>
        <p className=' py-2' > vote count : {detailesmovie?.vote_count?.toFixed(1)} </p>
        <p className=' py-2'> popularity :{detailesmovie?.popularity?.toFixed(1)} </p>
        <p className=' py-2'> release date :{detailesmovie?.release_date} </p>      
          <p className=' py-2 '>{detailesmovie.overview}</p>


    </div>
  </div>
  
  
  </>
}
