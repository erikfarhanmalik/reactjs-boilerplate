var React = require('react');
var createReactClass = require('create-react-class');
var ReactDom = require('react-dom');

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import TodoComponent from './component/TodoComponent';
import AboutComponent from './component/AboutComponent';

class App extends React.Component {

  render() {
    return (<BrowserRouter>
      <div>
        <nav>
          <Link to="/">Todo App</Link>
          <Link to="/about">About</Link>
        </nav>
        <Switch>
          <Route exact={true} path={'/'} component={() => (<TodoComponent label="My Great Todo List"/>)}></Route>
          <Route path={'/about'} component={AboutComponent}></Route>
        </Switch>
      </div>
    </BrowserRouter>);
  }

};

ReactDom.render(<App/>, document.getElementById('app'));
