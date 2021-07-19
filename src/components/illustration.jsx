import React from 'react'
import logo from "./img/illustration.svg"
import './button.css'


const Illustration = () =>{
    return(
        <React.Fragment>
        <div className="d-flex justify-content-center">
            <img id="illustration" src={logo} alt="logo" width="90%"/>
        </div>
        <div id="blue">
            <div className="container">
            <h2  className="d-flex justify-content-center" id="intro-2-heading">
                Hi, I am Ritik Shrivastava. Nice to meet you.
            </h2>
            <p  className="d-flex justify-content-center"  id="intro-2-para">
            I am a Computer Science Engineer who has an affinity to
             design and develop websites that help to solve or ease out real-world problems and look cool simultaneously.
               I can also contribute to Blockchain and Cloud Technologies and find out-of-the-box solutions for your problems. 
            </p>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Illustration;