var React = require('react');
var createReactClass = require('create-react-class');

require('../css/todo-item.css');

var TodoItem = createReactClass({
  handleDelete: function() {
    this.props.onDelete(this.props.item);
  },
  render: function() {
    return (<li>
      <div className="todo-item">
        <span className="item-name">{this.props.item}</span>
        <span className="item-remove" onClick={this.handleDelete}>x</span>
      </div>
    </li>);
  }
});

module.exports = TodoItem;
