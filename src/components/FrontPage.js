import React from 'react';
import {useState,useContext} from 'react';
import '../css/FrontPage.css';
import Intro from '../components/Intro.js'
import Photo from '../components/Photo.js'
import Social from '../components/Social.js'
import Contact from '../components/Contact';




function FrontPage(){

    const flip = false;

    const flipContext= React.createContext(flip);

    if(flip===false){
        return(
            <div className="FrontPage">
                <Intro/>
                <Photo/>
                <flipContext.Provider value={flip}><Social/></flipContext.Provider> 
            </div>
    
        );
    }
    else{
        return(
            <flipContext.Provider value={flip}><Contact/></flipContext.Provider> 
        );
    }

    
}
export default FrontPage