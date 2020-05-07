import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop:50,
    borderTop:'1px solid #ccc',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs>
            Divjansh's Recipes
          </Grid>
          <Grid item xs={6}>
            made with ❤ 
          </Grid>
          <Grid item xs>
            <TwitterIcon/>
            <FacebookIcon/>
            <YouTubeIcon/>
            <InstagramIcon/>
          </Grid>
        </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
