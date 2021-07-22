import React from 'react';
import './button.css';

const Connect = () =>{
    return (
        <React.Fragment>
            <div id="blue">
            <div className="container text-center" id="connect">
                <div className="row mt-4 banner mx-4">
                    <h3 className="col-12 col-md-4 mb-4 heading-skills">
                        Start a project
                    </h3>
                    <div className="col-12 col-md-8">
                        Interested in working together? Connect with me and we will discuss about how to be the next billionaire.
                    </div>
                </div>
                <p>
                    <a className="fa fa-linkedin icons" href="https://www.linkedin.com/in/ritik-shrivastava-6768a11a3/">                     
                    </a>
                    <a className="fa fa-instagram icons" href="https://www.instagram.com/https.ritik/">                        
                    </a>
                    <a className="fa fa-github icons" href="https://github.com/RK-2000">
                    </a>
                    <a className="fa fa-google icons" href="mailto:ritikshri19@gmail.com"></a>
                </p>
                <div className="mt-4 mb-4 text-light">
                    Handcrafted by Ritik Shrivastava.
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Connect;