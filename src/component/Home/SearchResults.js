import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { v4 as uuidv4 } from 'uuid';

import Detail from '../RecipeDetail/Detail'

const useStyles = makeStyles(theme => ({
  root: {
    minWidth:700,
    maxWidth:900,
    maxHeight:400,
    overflowY:'scroll',
    backgroundColor: '#ccc',
  },
}));

export default function SearchResults(props) {
  const classes = useStyles();
  console.log("here is props");
  console.log(props.data[0].name)
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
        {props.data.map((name) => 
        <Link to={{pathname: '/about' , query: name.name}} key={uuidv4()}>
          <ListItem key={uuidv4()}>
              <Typography variant="h6">
                  {name.name} 
                </Typography>
          </ListItem>
        </Link>)}
      </List>
    </div>
  );
}