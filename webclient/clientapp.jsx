var React = require('react');
var ReactDOM = require('react-dom');
var {browserHistory, Route, Router, IndexRoute} = require('react-router');
var NavBar = require('./components/NavBar');
var Favourites = require('./components/favourites.jsx');
var Home = require('./components/mainClientapp.jsx');
var login = require('./components/login.jsx');

var MainComp = React.createClass({
    render: function() {
        return (
            <div>
                <NavBar/>
                <br/><br/><br/><br/> {this.props.children}
            </div>
        );
    }
})
ReactDOM.render(
    <Router history={browserHistory}>
      <Route path='/' component={login}/>
      <Route component={MainComp}>
          <Route path='/home' component={Home}/>
          <Route path="/favourites" component={Favourites}/>
      </Route>
    </Router>, document.getElementById('mountapp'));
