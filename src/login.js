import React from 'react';
import {loadUser} from './redux/actions';
import FacebookLogin from 'react-facebook-login';
import {connect} from "react-redux";

class Login extends React.Component {
    responseFacebook(response){
        let {loadUser} = this.props;
        if(response && response.accessToken){
            loadUser(response);
        }
    }

    render() {
         return (
             <div className="body">
                <div id="login"> Login </div>
                <FacebookLogin
                    appId = "411464489229433"
                    fields = "name,email,picture"
                    callback = {this.responseFacebook.bind(this)}
                    />
             </div>
         );  
    }
}


Login =  connect((state, ownProps)=>{
    var user =state.login && state.login.user;
    return {user}
 },{
     loadUser
 })(Login);

 export default Login;