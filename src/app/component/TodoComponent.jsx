var React = require('react');
var createReactClass = require('create-react-class');

import axios from 'axios';
import {connect} from 'react-redux';

import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

import {fetchTodo} from '../action/TodoActions';

require('../css/todo-component.css');

var api = axios.create({baseURL: 'http://localhost:8000/todo', timeout: 1000});

class TodoComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  //sample of lifecycle functions
  componentWillMount() {
    // console.log('component will mount');
  }

  componentDidMount() {
    // good place to do some ajax request
    api.get().then(function(response) {
      this.props.fetchTodo(response.data._embedded.todo);
    }.bind(this)).catch(function(error) {
      console.log(error);
    });
  }

  componentWillUpdate() {
    // console.log('component will update');
  }
  //end sample of lifecycle functions

  render() {
    var todos = this.props.todos;
    todos = todos.map(function(item, index) {
      return (<TodoItem item={item} key={index} onDelete={this.onDelete}/>);
    }.bind(this));

    return (<div id="todo-list">
      <p>{this.props.label}</p>
      <ul>{todos}</ul>
      <TodoForm onAdd={this.onAdd}/>
    </div>)
  }

};

const bindStateToProperty = (state) => ({todos: state.todos});
const bindActionToPeroperty = (dispatch) => ({
  fetchTodo: (todos) => dispatch(fetchTodo(todos))
});

export default connect(bindStateToProperty, bindActionToPeroperty)(TodoComponent);
