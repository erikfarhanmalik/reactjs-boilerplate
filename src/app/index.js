var React = require('react');
var createReactClass = require('create-react-class');
var ReactDom = require('react-dom');

var TodoItem = createReactClass({
  render:function(){
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
        </div>
      </li>
    );
  }
});

var TodoComponent = createReactClass({
  getInitialState: function(){
    return {
      todos: ['sleep', 'read', 'watch']
    };
  },
  render: function(){

    setTimeout(function(){
      this.setState({
        // use this.setState({the state}) to modify the state -> will modify virtual and update the Real Dom efficiently by comparing both of DOM
        todos: ['sleeping', 'reading', 'watching']
      })
      // bind external "this" into setTimeout context
    }.bind(this), 5000);

    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return (
        <TodoItem item={item} key={index}/>
      )
    })

    return(
      <div id="todo-list">
        <p>{this.props.label}</p>
        <p>{this.props.user.name}</p>
        <p>{this.props.user.status}</p>

        <br/>

        <ul>{todos}</ul>
      </div>
    )
  }
});

var user  = {
  name: 'erik',
  status: 'online',
}

ReactDom.render(<TodoComponent label="Todo List" user={user}/>, document.getElementById('todo-wrapper'));
