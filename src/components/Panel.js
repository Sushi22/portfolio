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
  const [myprop,propChange]=useState(props);

  return (
    <div className={classes.root} id="panel">
      <Avatar alt="TechIcon" src={techstack} className={classes.large} onClick={propChange(myprop=>"tech")}/>
      <Avatar alt="Travis Howard" src={cp} className={classes.large} />
      <Avatar alt="Cindy Baker" src={crft4} className={classes.large}/>
    </div>
  );
}