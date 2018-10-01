var React = require('react');
var createReactClass = require('create-react-class');

var TodoItem = require('./TodoItem');

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
      </div>
    )
  }
});


module.exports = TodoComponent;
