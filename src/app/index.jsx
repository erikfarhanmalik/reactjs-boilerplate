import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import {reducers} from './reducer/reducers';
import TodoComponent from './component/TodoComponent';
import AboutComponent from './component/AboutComponent';

const store = createStore(reducers, applyMiddleware(thunk));

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

ReactDom.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));
