import React from 'react';
import "../css/Sections.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import gssummit from '../photos/gssummit.png';
import cousera from '../photos/cousera.png';
import devc2 from '../photos/devc2.png';
import Grow from '@material-ui/core/Grow';
import { Icon } from '@iconify/react';
import codechefIcon from '@iconify/icons-simple-icons/codechef';
import geeksforgeeksIcon from '@iconify/icons-simple-icons/geeksforgeeks';
import Progress from './Progress.js';
import Data from './Data.js';
import Card from '@material-ui/core/Card';
import { CardContent, Typography,Button, Badge, Link } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection:'row',
      flexWrap: 'wrap',
      justifyContent:'space-evenly',
      position:'relative',
      
     
     
      '& > *': {
        margin: theme.spacing(4),
        width: theme.spacing(45),
        height: theme.spacing(30),
  
        },
      
      
    },
    pos:{
        marginTop:"50px",
    },
   
}
    ));
  



function Sections(props)
{

    const classes = useStyles();

    const codechef_url="https://www.codechef.com/users/sushj2211";
    const hr_url="https://www.hackerrank.com/sushmitajoshi22";

    const c_url="https://www.coursera.org/account/accomplishments/certificate/WDWPB8GE3YXD";
    const devc_url="https://openclassrooms.com/en/course-certificates/9712019675";
    const gs_url="https://drive.google.com/file/d/13ocqrCzhY1ldEV0f7pvqiFtG_boqoRIF/view";

    const cftList =[[gssummit,gs_url],[cousera,c_url],[devc2,devc_url]];
    const techList=[["html5",70,"html5"],["css3",70,"css3"],["js",50,"javascript"],["react",45,"react"],["python",60,"python"]];
    // const pro_list=[70,70,50,45,60];

    console.log(props);
    if(props.prop==="intro")
    {
        return(
            <div className="Sections_intro">
                <Typography variant="h5">I am a Web Developer , an open source enthusiast and a passionate coder.</Typography>
            </div>
    
        );
    }


    else if(props.prop==="tech")
    {
        const Listtech=techList.map((x)=><div>
             <FontAwesomeIcon icon={['fab',x[0]]} size="4x"/>
                <p style={{textTransform:"uppercase",fontSize:"20px"}}>{x[2]}</p>
             <Progress done={x[1]}/>
        </div>)
        return(
            <React.Fragment>
                <div className="Sections_list">
                    {Listtech}
                </div>
            </React.Fragment>
        );
    }


    else if(props.prop==="cp")
    {
        return(
            <div className="Sections_cp">
                <div>
                     <FontAwesomeIcon icon={['fab',"hackerrank"]} size="3x"/>
                    <Card className="root1" variant="outlined">
                        <CardContent>
                        <Data/>
                        <a href={hr_url} style={{textDecoration:"none"}}>
                            <Button size="small">See Full Profile</Button>
                        </a>
                    </CardContent>
                      
                    </Card>
                    
                </div>
                <div>
                    <Icon icon={codechefIcon} height="60"width="80"/>
                    <Card className="root1" variant="outlined">
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
                        <a href={codechef_url} style={{textDecoration:"none"}}><Button size="small" className={classes.pos} >See Full Profile</Button></a>
                        </CardContent>
                    </Card>
                </div>
                {/* <div>
                    <Icon icon={geeksforgeeksIcon} height="60"width="80"/>
                </div> */}
                
            </div>
        );
    }


    else
    {
        const myCft=cftList.map( (x)=>
        <Grow in={true}  style={{ transitionDelay:'30ms'}}>
            <Paper elevation={9} className="my_cft">
            <div>See full Certificate</div>
            <a href={x[1]}>
            <img src={x[0]} alt={x} style={{width:"350px",height:"250px",padding:"35px",opacity:"0.6",}}/>
            </a>
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