var React = require('react');
var createReactClass = require('create-react-class');

import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

require('../css/todo-component.css');

class TodoComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: ['sleep', 'read', 'watch']
    };

    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onDelete(item) {
    var updatedTodos = this.state.todos.filter(function(val, index) {
      return item !== val;
    });
    this.setState({todos: updatedTodos});
  }

  onAdd(item) {
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({todos: updatedTodos});
  }

  //sample of lifecycle functions
  componentWillMount() {
    console.log('component will mount');
  }

  componentDidMount() {
    console.log('component did mount');
    // good place to do some ajax request
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
