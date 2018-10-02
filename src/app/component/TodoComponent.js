var React = require('react');
var createReactClass = require('create-react-class');

var TodoItem = require('./TodoItem');
var TodoForm = require('./TodoForm');

require('../css/todo-component.css');

var TodoComponent = createReactClass({

  getInitialState: function(){
    return {
      todos: ['sleep', 'read', 'watch']
    };
  },

  onDelete: function(item){
    var updatedTodos = this.state.todos.filter(function(val, index){
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  },

  onAdd: function(item){
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    });
  },

  //sample of lifecycle functions
  componentWillMount: function() {
    console.log('component will mount');
  },

  componentDidMount: function() {
    console.log('component did mount');
    // good place to do some ajax request
  },

  componentWillUpdate: function() {
    console.log('component will update');
  },
  //end sample of lifecycle functions

  render: function(){
    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return (
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      );
    }.bind(this));

    return(
      <div id="todo-list">
        <p>{this.props.label}</p>
        <ul>{todos}</ul>
        <TodoForm onAdd={this.onAdd} />
      </div>
    )
  }

});

module.exports = TodoComponent;
