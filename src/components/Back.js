import React,{useContext} from 'react';
import flipContext from '../components/context.js';

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