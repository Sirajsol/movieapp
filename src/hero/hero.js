import React from "react";
import './hero.css'
import vid from'.././vid.mp4'
const Hero=()=>{
    return<>
    <div></div>
    <video src={vid}autoPlay muted  loop className="videocon"/>
    <div className="bo">
        <p>movie can  take you into a jurny</p>
    <button className="find">find out</button>


    </div>
       
   
    </>
}
export default Hero