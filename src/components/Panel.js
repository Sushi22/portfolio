import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import techstack from '../photos/techstack.jpg';
import Zoom from '@material-ui/core/Zoom';
import cp from '../photos/cp.jpg';
import crft4 from '../photos/crft4.png';
import '../css/Panel.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(6),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    cursor: "pointer"
  },
}));



export default function Panel(props) {
  const classes = useStyles();
 
  const myfunc1=props.func1;
  const myfunc2=props.func2;
  const myfunc3=props.func3;


  return (
    <div className={classes.root} id="panel">
      <Tooltip title="TechStack" TransitionComponent={Zoom}>
        <Avatar alt="TechIcon" src={techstack} className={classes.large} onClick={myfunc1} />  
      </Tooltip>
      <Tooltip title="Coding Skills" TransitionComponent={Zoom}>
        <Avatar alt="Travis Howard" src={cp} className={classes.large}  onClick={myfunc2}/> 
      </Tooltip>
      <Tooltip title="Certifications" TransitionComponent={Zoom}>
        <Avatar alt="Cindy Baker" src={crft4} className={classes.large} onClick={myfunc3}/>
      </Tooltip>
     
    </div>
  );
}