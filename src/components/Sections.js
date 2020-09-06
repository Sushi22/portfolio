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
import Progress from './Progress.js';
import Data from './Data.js';
import Card from '@material-ui/core/Card';
import { CardContent, Typography,Button, Badge } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent:'space-between',
      textAlign:'center',
     
      '& > *': {
        margin: theme.spacing(4),
        width: theme.spacing(45),
        height: theme.spacing(30),
        },
      
      
    },
    pos:{
        marginTop:"50px",
    },
    card:{
        minWidth: 275,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'space-between',
        textAlign:'center',

        '& > *': {
            margin: theme.spacing(4),
            width: theme.spacing(45),
            height: theme.spacing(30),
            },
    }
    
}
    ));
  



function Sections(props)
{

    const classes = useStyles();

    const cftList =[gssummit,cousera,devc];
    const techList=[["html5",70],["css3",70],["js",50],["react",45],["python",60]];
    // const pro_list=[70,70,50,45,60];

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
        const Listtech=techList.map((x)=><div>
             <FontAwesomeIcon className="techicon" icon={['fab',x[0]]} size="5x"/>
                <p>{x[0]}</p>
             <Progress done={x[1]}/>
        </div>)
           
           
       
        // const ProgressList=pro_list.map((y)=><Progress done={y}/>)
        return(
            <React.Fragment>
                <div className="Sections">
                    {Listtech}
                </div>
                {/* <div style={{display:"flex",flexDirection:"row", justifyContent:"space-evenly",flexWrap:"wrap",flexGrow:"1"}}>
                {ProgressList}
                </div> */}
            </React.Fragment>
        );
    }
    else if(props.prop==="cp")
    {
        return(
            <div style={{display:"flex",flexDirection:"row", flexGrow:"1",flexWrap:"wrap",justifyContent:"space-around"}}>
                <div>
                    <Data/>
                    <FontAwesomeIcon icon={['fab',"hackerrank"]} size="3x"/>
                   
                </div>
                <div>
                    <Card className={classes.card} variant="outlined">
                        <CardContent>
                        <Typography variant="h4" color="textSecondary">
                            Rating
                        </Typography>
                        <Typography variant="h3" color="textPrimary">
                            1443
                        </Typography>
                        <Typography>
                            <span style={{backgroundColor:"green", margin:"2px",color:"white"}}>★</span>
                            <span style={{backgroundColor:"green",margin:"2px",color:"white"}}>★</span>
                        </Typography>
                        <Typography variant="body2" component="p">
                            Highest Rating: 1532
                        </Typography>
                        <Button size="small" className={classes.pos}>See Full Profile</Button>
                        </CardContent>
                    </Card>
                   
                    <Icon icon={codechefIcon} height="60"width="80"/>
                   
                </div>
                {/* <div>
                    <Icon icon={geeksforgeeksIcon} height="60"width="80"/>
                </div> */}
                
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