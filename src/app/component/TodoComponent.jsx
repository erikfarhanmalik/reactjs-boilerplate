var React = require('react');
var createReactClass = require('create-react-class');

import axios from 'axios';

import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

require('../css/todo-component.css');

var api = axios.create({
  baseURL: 'http://localhost:8000/todo',
  timeout: 1000
});

class TodoComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onDelete(item) {
    api.delete(item._links.self.href).then(function(response) {
      var updatedTodos = this.state.todos.filter(function(val, index) {
        return item._links.self.href !== val._links.self.href;
      });
      this.setState({todos: updatedTodos});
    }.bind(this)).catch(function(error) {
      console.log(error);
    });
  }

  onAdd(item) {
    api.post("/", {content: item}).then(function(response) {
      var updatedTodos = this.state.todos;
      updatedTodos.push(response.data);
      this.setState({todos: updatedTodos});
    }.bind(this)).catch(function(error) {
      console.log(error);
    });
  }

  //sample of lifecycle functions
  componentWillMount() {
    console.log('component will mount');
  }

  componentDidMount() {
    // good place to do some ajax request
    console.log('component did mount');
    api.get().then(function(response) {
      this.setState({todos: response.data._embedded.todo});
    }.bind(this)).catch(function(error) {
      console.log(error);
    });
  }

  componentWillUpdate() {
    console.log('component will update');
  }
  //end sample of lifecycle functions

  render() {
    var todos = this.state.todos;
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

export default TodoComponent;
