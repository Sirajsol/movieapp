import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Movie from "../Movie/Movie";
import './SinglMovie.css';
const SingleMovie=()=>{
    const {Title}=useParams()
   
    const[movie,setMovie]=useState({})
    const getd=async()=>{
       
        const d=await axios.get(`https://www.omdbapi.com/?t=${Title}}&apikey=3fead2d3`)
        const dat=await d.data
        if(dat){
            setMovie(dat)
            console.log(dat.Year)
            // alert(dat.Search[0].Title)
        }
        
    }


    useEffect(()=>{

getd()
    },[Title])
return<>{

    <div className="singlecontainer">
       {movie&&movie.Title&&
       <div><h1>{` ${movie.Title } ${ movie.Year}`}</h1>
<img src={movie.Poster}/>
<h2>{`Runtime :${movie.Runtime}`}</h2>
<p>{movie.Plot}</p></div>}
{!movie.Title&&<h1>Please wait...</h1>}
</div>
}

</>

}
export default SingleMovie