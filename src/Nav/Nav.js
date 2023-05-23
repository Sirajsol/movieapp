import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'
import cinem from '.././cinema.png'
const Nav=()=>{
return<div className="navcontainer">
    <div className="imgg">
        <img alt="logo" src={cinem}></img>
    </div>
<div className=" listcont">
    
<ul className="ull">
    
    <li>
        <Link to={'/Home'}  className="lnkk">Home</Link>
    </li>
    <li>
        <Link to={'/About'} className="lnkk">About</Link>
    </li>
    
</ul>
</div>

</div>

}
export default Nav