import React from 'react';
import deskfront2 from '../photos/deskfront2.png'
import '../css/Photo.css'

function Photo(){
    return(

    <div className="Photo">
        <img src={deskfront2} className="responsive" alt="mypic"/>
    </div>

    );
}

export default Photo;