import React from "react";
import './Movie.css'
import { Link } from "react-router-dom";
const Movie=({Title,Year,Type,Poster})=>{

    return<>
    <div className="outer">
      <h4>{Title}</h4> 
      {/* <img src={Poster}alt="image"></img> */}
        <Link to={`/SingleMovie/${Title}` } className="lnk"><img src={Poster}alt="image"></img></Link>
        <h4>{Year}</h4>
    </div>
    </>
}
export default Movie;