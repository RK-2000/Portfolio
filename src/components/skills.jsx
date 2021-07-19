import React from 'react';
import designer from './img/designer.svg';
import frontend from './img/frontend.svg';
import achievements from './img/achievements.svg';
const Skills = () => {
    return (
            <React.Fragment>
                <div className="container" id="narrow">
                    <div className="row " id="main-card">
                        <div className="col-12 col-lg-4 text-center skill-sec divider">
                            <img src={designer} />
                            <h3 className="heading-skills">Designing</h3>
                            <p className="para-skills">
                            I value simple content structure, 
                            clean design patterns, and 
                            thoughtful interactions.
                            </p>
                            <p className="sub-heading">
                                Things I enjoy designing
                            </p>
                            <p>
                                UI/UX for Websites and Mobile, Digital Posters
                            </p>
                            <p className="sub-heading">
                                Designing Tools
                            </p>
                            <p>
                                <ul>
                                    <li>
                                        Adobe Xd      
                                    </li>
                                    <li>
                                        Photoshop
                                    </li>
                                    <li>
                                        Pen & Paper
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className="col-12 col-lg-4 text-center skill-sec divider">
                            <img src={frontend}/>
                            <h3 className="heading-skills">Full-Stack</h3>
                            <p className="para-skills">
                            I like to code things from scratch, 
                            and enjoy bringing ideas to life in the browser.
                            </p>
                            <p className="sub-heading">
                                Languages I use for development
                            </p>
                            <p>
                                HTML, CSS, Python, JavaScript
                            </p>
                            <p className="sub-heading ">
                                Dev Tools and Frameworks
                            </p>
                            <ul>
                                <li>
                                    Django
                                </li>
                                <li>
                                    React
                                </li>
                                <li>
                                    Github
                                </li>
                                <li>
                                    PyCharm
                                </li>
                                <li>
                                    VScode
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-4 text-center skill-sec">
                            <img src={achievements}/>
                            <h3 className="heading-skills">Achievements</h3>
                            <p className="para-skills">
                            I like to dive into new challenges and lay hold of new oppurtunities
                            </p>
                            <p className="sub-heading">
                                Field of interest
                            </p>
                            <p>
                                Competitve Coding, Blockchain, Cloud Technologies, Web Development
                            </p>
                            <p className="sub-heading">
                                Accomplishment
                            </p>
                            <p>
                                <ul>
                                    <li>
                                        Qualified for Google CodeJam 2020 - 75 pts
                                    </li>
                                    <li>
                                        Qualified for Google CodeJam 2020 - 90 pts
                                    </li>
                                    <li>
                                        Creative Team Lead - Developers Student Club, Google Developers
                                    </li>
                                    <li>
                                        5 Short courses
                                    </li>

                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
    )
}

export default Skills