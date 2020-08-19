import React from 'react';
import "../css/Sections.css";

function Sections(props)
{
    if(props==="none")
    {
        return(
            <div className="Sections">
                <p>I am a Philomath , a Web Developer , open source Enthusiast and a passionate coder.
                </p>
            </div>
    
        );
    }
    else if(props==="tech")
    {
        return(
            <div>
                <p>
                    react django etc.
                </p>
            </div>
        );
    }
    
}

export default Sections;