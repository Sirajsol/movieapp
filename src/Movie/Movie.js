import React from "react";
import './Movie.css'
const Movie=({Title,Year,Type,Poster})=>{

    return<>
    <div className="outer">
       {Title}
        <img src={Poster}alt="image"></img>
        {Year}
    </div>
    </>
}
export default Movie;