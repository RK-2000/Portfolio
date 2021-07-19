import React from 'react'
import logo from "./img/avatar 2.png"
import './button.css'


const Avatar = () =>{
    return(
        <div className="container d-flex justify-content-center">
            <img id="avatar" src={logo} alt="logo" width="180vw"/>
        </div>
    )
}

export default Avatar