import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import techstack from '../photos/techstack.jpg';
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
  },
}));

export default function Panel() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="panel">
      <Avatar alt="TechIcon" src={techstack} className={classes.large}/>
      <Avatar alt="Travis Howard" src={cp} className={classes.large} />
      <Avatar alt="Cindy Baker" src={crft4} className={classes.large}/>
    </div>
  );
}