import React from 'react';
import '../css/Nav.css';

function Nav()
{
    let resume="https://docs.google.com/document/d/e/2PACX-1vQA2klcGl7uwP_fOcAEXluZ3BnkVZHvmyA9ZEMnXod9eQxMlR5_mEsmWquUESmQcR0Nv_0BELzf7iIF/pub"
    return(
        <div className="Nav">
        <nav>
            <ul>
                {/* <li><a href="#gallery">PictureBook</a></li> */}
                <li><a href={resume}>Resume</a></li>
                <li><a href="#contactme">Contact</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#app">Home</a></li>
                
            </ul>

        </nav>
    </div>
    );
    
}
export default Nav