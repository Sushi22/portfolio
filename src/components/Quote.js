import React,{useEffect,useState} from 'react';
import "../css/Quote.css";

const Quote=()=>{
    const quotes =["DREAM","Work Hard at it", "Achieve it", "And Move on.."];
    const nameClass=["one","two","three","four"];
    const n=quotes.length;

    const[i,setIndex]=useState(0);


    useEffect(()=>{
        const interval=setInterval(()=>{
            setIndex(i=>(i+1)%n);
        }, 1800);
        return ()=>clearInterval(interval);
    }, [i]);

    return(
        <div className={nameClass[i]}>
            <h1>{quotes[i]}</h1>
        </div>

    );
}

export default Quote;