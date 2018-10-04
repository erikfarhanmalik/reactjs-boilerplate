var React = require('react');
var createReactClass = require('create-react-class');
var ReactDom = require('react-dom');

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import TodoComponent from './component/TodoComponent';
import AboutComponent from './component/AboutComponent';

const reducer = function(state = {}, action) {

  console.log('action');
  console.log(action);
  switch (action.type) {
    case 'fetchTodo':
      return action.payload;

    case 'addTodo':
      var todos = [...state.todos];
      todos.push(action.payload);
      return {
        ...state,
        todos: todos
      };

    case 'deleteTodo':
      var todos = [...state.todos].filter((item, index) => item._links.self !== action.payload._links.self);
      return {
        ...state,
        todos: todos
      };

    default:
      return {todos: []};
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
