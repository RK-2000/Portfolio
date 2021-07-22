import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import Navbar from './components/navbar';
import IntroHeading from './components/introduction1';
import Avatar from './components/avatar';
import Illustration from './components/illustration';
import Skills from './components/skills';
import Connect from './components/connect';


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <Helmet>
          <title>Ritik Shrivastava</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Helmet>
        <Navbar/>
        <IntroHeading/>
        <Avatar/>
        <Illustration/>
        <Skills/>
        <Connect/>
      </React.Fragment>
     );
  }
}


export default App;
