import React from 'react';
import '../css/About.css';
import Panel from './Panel.js';
import Sections from './Sections.js';

function About()
{
    const value="none";
    return(

        <div className="About" id="about">
           <Panel prop={value}/>
           <Sections prop={value}/>
        </div>


    );
}

export default About;