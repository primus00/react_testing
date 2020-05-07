import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './Header'
import banner from './assets/lovefood.jpg';
import RecipeReviewCard from './RecipeCard';
import Footer from './Footer';
import SearchResults from './SearchResults';

const styles = {
  root: {
    flexGrow: 1,
    backgroundImage: `url(${banner})`,
    backgroundPosition: 'top center',
    backgroundSize:'cover',
    height:600,
  },
  centering: {
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    verticalAlign:'center',
    textAlign: 'center',
  },
  search_text:{
    minWidth:700,
    maxWidth:900,
    borderRadius:0,
  },
  top:{
    marginTop:80,
    fontSize:60,
  },
  secondary: {
    paddingLeft:30,
    paddingRight:30,
    fontSize:20,
    marginBottom:30,
  },
  body_content:{
    marginTop:130,
  },
  paper: {
    padding: 5,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    verticalAlign:'center',
    textAlign: 'center',
  },
  content_secondary:{
    paddingLeft:400,
    paddingRight:400,
    paddingTop:100,
    paddingBottom:100,
    fontSize:20,
  }
};

class Home extends React.Component{
  constructor(props){
    super();
  }
  state={
    names:[{}],
    islogin:false
  }
  componentDidMount() {
    if(this.props.location.state) {
      this.setState({
        islogin:true,
      });
    }
  }
  search(e) {
    var search_text = e.target.value;
    fetch('http://127.0.0.1:8000/search', {
      method: 'POST',
      body: JSON.stringify({
        "search_text": search_text,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {
        return response.json()
      }).then(json => {
        this.setState({
          names:json
        });
    });
  }

  render(){

    const {classes} = this.props;
    

    return (
      <div className={classes.root}>
          <Header login={this.state.islogin}/>:

        <FormControl fullWidth variant="outlined" className={classes.centering}>
        <Box>
          <Typography className={classes.top}>
          lorem Ipsum Food Court
          </Typography>
          <Typography className={classes.secondary}>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled
          </Typography>
        </Box>
          <TextField
            id="outlined-textarea"
            variant="outlined"
            placeholder="search for food"
            className={classes.search_text}
            onChange={this.search.bind(this)}
          />
          {this.state.names[0] && this.state.names[0].name ? <SearchResults data={this.state.names}/>:null}
        </FormControl>

        <Grid container className={classes.body_content}>
          <Grid item xs>
          </Grid>
          <Grid item xs={10}>
            <Paper className={classes.paper}>
              <Box>
                <Typography className={classes.content_secondary}>
                  Lorem Ipsum is simply dummy text of the printing and 
                  typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled
                </Typography>
              </Box>
              
              <Grid container spacing={3}>
                <Grid item xs>
                  <RecipeReviewCard/>
                </Grid>
                <Grid item xs>
                  <RecipeReviewCard/>
                </Grid>
                <Grid item xs>
                  <RecipeReviewCard/>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs>
                  <RecipeReviewCard/>
                </Grid>
                <Grid item xs>
                  <RecipeReviewCard/>
                </Grid>
                <Grid item xs>
                  <RecipeReviewCard/>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs>
          </Grid>
        </Grid>

        <Footer />
      </div>
    );
  }
}
export default withStyles(styles)(Home);