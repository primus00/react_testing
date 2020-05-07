import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import {Redirect} from 'react-router-dom';

const styles = {
  root: {
    marginTop:50,
    padding: 5,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    verticalAlign:'center',
    textAlign: 'center',
    maxwidth:500,
  },
  root2: {
    padding: 5,
    maxWidth:500,
  },
  input:{
    marginBottom:10,
  }
};

class Register extends React.Component<props> {
  constructor(props){
    super(props);
    this.state={
      name:"",
      pass1:"",
      redirect:false,
    }
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={{pathname:'/' ,state:{login:true}}} />
    }
  }

  register(){


      fetch('http://localhost:8000/rest-auth/login/', {
      method: 'POST',
      body: JSON.stringify({
        "username": this.state.name,
        "password": this.state.pass1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {
        return response.json()
      }).then(json => {
        console.log(json);
        if(json.key) {
          this.setState({
            redirect:true,
          })
          alert("Login confirmed");
        }
        else{
          if(json.non_field_errors) alert(json.non_field_errors[0])
        }
    });
}
render(){
  const {classes} = this.props;
  
  

  return (
    
    <div className={classes.root}>
      {this.renderRedirect()}
      <FormControl fullWidth className={classes.root2}>
            <TextField
              className={classes.input}
              id="outlined-name"
              label="name"
              onChange={(e)=> this.setState({name:e.target.value})}
              variant="outlined"
            />
            <TextField
              className={classes.input}
              id="outlined-name"
              label="Password"
              onChange={(e)=> this.setState({pass1:e.target.value})}
              variant="outlined"
            />
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
            onClick={this.register.bind(this)}
          >
            Login
          </Button>
      </FormControl>
    </div>
  );
}
}
export default withStyles(styles)(Register);