var React = require('react');
var {browserHistory} = require('react-router');
import { Card, Icon, Image, Input, Button } from 'semantic-ui-react';

var divStyle = {
  marginLeft: '38%',
  background: '#c2c2a3'
};
var centerStyle = {
  marginTop:'5%',
  marginLeft:'33%',
  color:'white'
};
var headerStyle = {
  marginTop:'5%',
  marginLeft:'33%',
  color:'green'
};
class Login extends React.Component {
    constructor() {
        super();
        this.state={username:'',password:''};
    }

handleUserName(e)
{
 this.setState({username:e.target.value});
}
handlePassword(e)
{
 this.setState({password:e.target.value});
}
LoginUser(){
 $.ajax({
   url:"http://localhost:8080/users/login",
   type: 'POST',
   datatype: 'JSON',
   data:{
     'username':this.state.username,
     'password':this.state.password
   },
   success: function(res){
     console.log(res.responseText);
     browserHistory.push('/home');
   }.bind(this),
   error: function(err){
     alert("Invalid username or password");
     console.log(err.responseText);
   }.bind(this)
 });
}
 render(){
   return(<div>
     <h2 style={headerStyle}>Login to Find the best restaurants in your favourite City</h2>
     <Card style={divStyle}>
        <h1 style={centerStyle}>Login</h1>
        <Card.Content >
               <Input  onChange={this.handleUserName.bind(this)}  placeholder="Enter User Name"  type="text" autoFocus  />
        </Card.Content>
        <Card.Content>
               <Input onChange={this.handlePassword.bind(this)}  placeholder="Enter Password"  type="password" />
        </Card.Content>
        <Card.Content>
          <Button size='large' color='pink' onClick={this.LoginUser.bind(this)} >Login</Button>
        </Card.Content>

    </Card>
  </div>);
 }
}

module.exports=Login;
