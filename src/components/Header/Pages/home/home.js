import React, { useEffect } from "react";
import "./home.css"

const home = () =>{

    useEffect (() => {

        fetch()
        .then (res => res.json())
        .thrn ( data => console.log(data))


    },[])
    return (

        <div>

        </div>
    )
}

export default home 