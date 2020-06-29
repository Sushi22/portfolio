import React from 'react';
import '../css/Nav.css';

function Nav()
{
    return(
        <div className="Nav">
        <nav>
            <ul>
                <li><a href="#gallery">PictureBook</a></li>
                <li><a href="#contactme">Contact</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#app">Home</a></li>
                
            </ul>

        </nav>
    </div>
    );
    
}
export default Nav