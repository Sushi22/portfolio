import React,{useContext} from 'react';
import flipContext from '../components/context.js';
import { Divider } from '@material-ui/core';
const Back=()=>
{

    const {flip,setFlip} = useContext(flipContext);
    return(

        <div className="back" onClick={() => setFlip(false)}>
            Back
        </div>

    );
}
export default Back;