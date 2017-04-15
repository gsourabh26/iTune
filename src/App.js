import React, { Component } from 'react';
import Login from "./login";
import Dashboard from "./dashboard/dashboard";
import {connect} from "react-redux";
import LS from "./localStorage";

class App extends Component {
  render() {
    return <div>
        {this.props.user ? <Dashboard user={this.props.user}/>: <Login /> }
    </div>
  }
}

App = connect((state)=>{
    var user = state && state.login && state.login.user || LS.get("user");;
    if(user && typeof user === "string"){
      user = JSON.parse(user);
    }
    return {user};
},{})(App);

export default App;
