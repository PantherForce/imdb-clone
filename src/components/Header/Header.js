
import React from "react " 
import "./Header.css"
import { Link } from "react-router-dom"

const Header = ()=>{
    return(
        <div className="header">
            <div className="header-left">
               
               <Link to = "/"></Link>
               <Link to =" ">Popular</Link>
              

            </div>
        </div>
    )
}


export default Header 