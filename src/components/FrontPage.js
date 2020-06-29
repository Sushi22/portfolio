import React from 'react';
import {useState} from 'react';
import '../css/FrontPage.css';
import Intro from '../components/Intro.js'
import Photo from '../components/Photo.js'
import Social from '../components/Social.js'
import Contact from '../components/Contact.js';
import Back from '../components/Back.js';
import flipContext from '../components/context.js';
import PropTypes from 'prop-types';


const FrontPage=(props)=>{

    const [flip, setFlip] = useState(false);
    const value = { flip, setFlip };

    if(flip===false){
        return(
            <div className="FrontPage">
                <Intro/>
                <Photo/>
                <flipContext.Provider value={value}><Social/></flipContext.Provider> 
            </div>
    
        );
    }
    else{
        return(
            <div className="Frontpage">
                <Contact env={props.env} />
                <flipContext.Provider value={value}><Back/></flipContext.Provider>

            </div>
           

        );
    }

    
}

FrontPage.propTypes = {
    env: PropTypes.object.isRequired
  };

export default FrontPage;