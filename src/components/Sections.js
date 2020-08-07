import React from 'react';
import "../css/Sections.css";

function Sections(props)
{
    console.log(props);
    if(props.prop==="intro")
    {
        return(
            <div className="Sections">
                <p>I am a Philomath , a Web Developer , open source Enthusiast and a passionate coder.
                </p>
            </div>
    
        );
    }
    else if(props.prop==="tech")
    {
        return(
            <div>
                <p>
                    react django etc.
                </p>
            </div>
        );
    }
    else if(props.prop==="cp")
    {
        return(
            <div>
                <p>
                    competitive programming
                </p>
            </div>
        );
    }
    else{
        return(
            <div>
                <p>
                    certificates
                </p>
            </div>
        );
    }
    
}

export default Sections;