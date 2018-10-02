var React = require('react');
var createReactClass = require('create-react-class');
var ReactDom = require('react-dom');

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

var TodoComponent = require('./component/TodoComponent');
var AboutComponent = require('./component/AboutComponent');

var App = createReactClass({

  render: function() {
    var todo = function() {
      return (<TodoComponent label="My Great Todo List"/>);
    }

    return (<BrowserRouter>
      <div>
        <nav>
          <Link to="/">Todo App</Link>
          <Link to="/about">About</Link>
        </nav>
        <Switch>
          <Route exact={true} path={'/'} component={todo}></Route>
          <Route path={'/about'} component={AboutComponent}></Route>
        </Switch>
      </div>
    </BrowserRouter>);
  }

});

ReactDom.render(<App/>, document.getElementById('app'));
