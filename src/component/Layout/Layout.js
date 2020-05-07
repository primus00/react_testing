import React from 'react';
import Home from '../Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Detail from '../RecipeDetail/Detail';
import Register from '../Registration/Register';
import Login from '../Login/Login';


class Layout extends React.Component{
  render(){
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={Detail} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default Layout;