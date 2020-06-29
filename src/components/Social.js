import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Social.css';
import flipContext from '../components/context.js';

const fb_url="https://www.facebook.com/sushmita.joshi.963871";
const twi_url="https://twitter.com/SUSHMITAJOSHI9";
const git_url="https://github.com/Sushi22";
const lin_url="https://www.linkedin.com/in/sushmita-joshi-71b299194/";

const Social=()=>{

    const {flip,setFlip} = useContext(flipContext);

    return(
        <div className="Social">
            <a href={fb_url}><FontAwesomeIcon id="fb" icon={['fab', 'facebook']} size="3x" /></a>
            <a href={twi_url}><FontAwesomeIcon id ="twi" icon={['fab', 'twitter']} size="3x" /></a>
            <a href={lin_url}><FontAwesomeIcon id="in" icon={['fab', 'linkedin']} size="3x" /></a>
            <a href={git_url}><FontAwesomeIcon id="git" icon={['fab', 'github']} size="3x" /></a>
            {/* <FontAwesomeIcon id="mail" icon={['fas','envelope']} size="3x" onClick={() => setFlip(true)}/> */}
        </div>

    );
}


export default Social;