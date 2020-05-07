import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import banner from '../Home/assets/fresh-food-banner.jpg';
import Typography from '@material-ui/core/Typography';

import { v4 as uuidv4 } from 'uuid';

const styles = {
  root: {
    flexGrow: 1,
    padding:20
  },
  name:{
    marginTop:-300,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    verticalAlign:'center',
    textAlign: 'center',
    fontSize:100,
    color:'#fff',

  },
  paperl: {
    padding: 2,
    marginLeft:40,
    textAlign: 'center',
    height:400,
    overflowY:'scroll',
  },
  paperr: {
    padding: 2,
    marginRight:40,
    textAlign: 'center',
    height:400,
    overflowY:'scroll',
  },
  bannerimg: {
    height:400,
  },
  details:{
    marginTop:'-50px'
  },
  ingredients:{
    marginTop:'-50px',
  }
};

class Detail extends React.Component<props> {
  constructor(props){
    super(props);
    this.state={
      name:this.props.location.query,
      procedure:'',
      ingredients:[],
    };
  }

  componentDidMount() {
    fetch('https://django-testing-and-deploy.herokuapp.com/api/get', {
      method: 'POST',
      body: JSON.stringify({
        "search_text": this.state.name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {
        return response.json()
      }).then(json => {
        console.log(json[0].ingredient);
        this.setState({
          procedure:json[0].description,
          ingredients:json[0].ingredient
        });
    });
  }

  render(){
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.bannerimg}>
            <img src={banner} style={{height:400, width:'100%'}}></img>
            <div className={classes.name}>
              {this.state.name}
            </div>
          </Grid>
          <Grid item xs={6} className={classes.details}>
            <Paper className={classes.paperl}>
              <Typography variant="h2">
                Procedure
              </Typography>
              {this.state.procedure}
            </Paper>
          </Grid>
          <Grid item xs={6} className={classes.ingredients}>
            <Paper className={classes.paperr}>
              <Typography variant="h2">
                Ingredients
              </Typography>
              <ul>
                {this.state.ingredients.map((name) => <li key={uuidv4()}> {name.name}</li>)}
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Detail);