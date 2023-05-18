import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../Movie/Movie";
import './MovieGrid.css'
const MovieGrid=()=>{
    const [data,setData]=useState(['hi','hi','hi'])
    const[searchTerm,setSearchTerm]=useState('All')
    const[searchYear,setSearchYear]=useState(2000)
    
    const[searching,setSearching]=useState(false)
    const getd=async()=>{
        setSearching(true)
        const d=await axios.get(`http://www.omdbapi.com/?s=${searchTerm}}&apikey=3fead2d3`)
        const dat=await d.data
        if(dat.Search){
            setData(dat.Search)
            console.log(data.length)
            // alert(dat.Search[0].Title)
        }
         else{ if(searchTerm&&searchTerm.length>0)setData([])}
         setSearching(false)
    }
    useEffect(()=>{
getd()
    },[searchTerm])
    
    return<div className="cont">
    <div>
        <label>search</label>
        <input className="text"
        type='text'
        value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)}}
        ></input>
    </div>
    <div className="movscont">
       
        {searching&&<h1>Searching...</h1>}
        {!searching&&
            data.map(dd=>{
                const {Title,Year,Type,Poster}={...dd}
                return<Movie {...dd}/>
            }
                
            )
        }
    </div>
    </div>
}
export default MovieGrid;