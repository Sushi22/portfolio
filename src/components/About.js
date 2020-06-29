import React from 'react';
import '../css/About.css';
import Panel from './Panel.js';
import Sections from './Sections.js';

function About()
{
    return(

        <div className="About" id="about">
           <Panel/>
           <Sections/>
        </div>


    );
}

export default About;