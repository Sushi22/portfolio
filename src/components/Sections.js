import React from 'react';
import "../css/Sections.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import gssummit from '../photos/gssummit.png';
import cousera from '../photos/cousera.png';
import devc from '../photos/devc.png';
import Grow from '@material-ui/core/Grow';
import { Icon } from '@iconify/react';
import codechefIcon from '@iconify/icons-simple-icons/codechef';
import geeksforgeeksIcon from '@iconify/icons-simple-icons/geeksforgeeks';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent:'space-between',
     
      '& > *': {
        margin: theme.spacing(4),
        width: theme.spacing(45),
        height: theme.spacing(30),
        },
    },
  }));
  



function Sections(props)
{

    const classes = useStyles();

    const cftList =[gssummit,cousera,devc];
    const techList=["html5","css3","js","react","python"];

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
        const Listtech=techList.map((x)=><FontAwesomeIcon className="techicon" icon={['fab',x]} size="5x"/>)
        return(
            <div className="Sections">
             {Listtech}
            </div>
        );
    }
    else if(props.prop==="cp")
    {
        return(
            <div style={{display:"flex",flexDirection:"column", flexGrow:"1",flexWrap:"wrap",justifyContent:"space-around",paddingLeft:"250px"}}>
                <FontAwesomeIcon icon={['fab',"hackerrank"]} size="3x"/>
                <Icon icon={codechefIcon} height="60"width="80"/>
                <Icon icon={geeksforgeeksIcon} height="60"width="80"/>
            </div>
        );
    }
    else{
        const myCft=cftList.map( (x)=>
        <Grow in={true}  style={{ transitionDelay:'30ms'}}>
            <Paper elevation={9}>
            <img src={x} alt={x} style={{width:"350px",height:"250px",padding:"35px",opacity:"0.6"}}/>
            </Paper> 
        </Grow>
        )
        return(
            <div className={classes.root}>
              {myCft}
            </div>
        );
    }
    
}

export default Sections;