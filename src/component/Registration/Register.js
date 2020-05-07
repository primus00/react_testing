import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

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
      email:"",
      pass1:"",
      pass2:""
    }
  }
  register(){
    if(this.state.pass1 !== this.state.pass2) alert("password and confirm password doenot match")
    else{
      fetch('https://django-testing-and-deploy.herokuapp.com/rest-auth/registration/', {
      method: 'POST',
      body: JSON.stringify({
        "username": this.state.name,
        "email": this.state.email,
        "password1": this.state.pass1,
        "password2": this.state.pass2,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {
        return response.json()
      }).then(json => {
        console.log(json);
        if(json.key) alert("please login")
        else{
          if(json.email) alert(json.email[0])
          else if(json.password1) alert(json.password1[0])
        }
    });
  }
  }
render(){
  const {classes} = this.props;
  return (
    <div className={classes.root}>
      <FormControl fullWidth className={classes.root2}>
          <TextField
              className={classes.input}
              id="outlined-name"
              label="Username"
              onChange={(e)=> this.setState({name:e.target.value})}
              variant="outlined"
            />
            <TextField
              className={classes.input}
              id="outlined-name"
              label="Email"
              onChange={(e)=> this.setState({email:e.target.value})}
              variant="outlined"
            />
            <TextField
              className={classes.input}
              id="outlined-name"
              label="Password"
              onChange={(e)=> this.setState({pass1:e.target.value})}
              variant="outlined"
            />
            <TextField
              className={classes.input}
              id="outlined-name"
              label="Confirm password"
              onChange={(e)=> this.setState({pass2:e.target.value})}
              variant="outlined"
            />
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
            onClick={this.register.bind(this)}
          >
            Register
          </Button>
      </FormControl>
    </div>
  );
}
}
export default withStyles(styles)(Register);