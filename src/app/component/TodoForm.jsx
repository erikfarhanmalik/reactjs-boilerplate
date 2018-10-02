var React = require('react');
var createReactClass = require('create-react-class');

require('../css/todo-form.css')

var TodoForm = createReactClass({

  handleSubmit: function(event) {
    event.preventDefault();
    var newItem = this.refs.newItem;
    this.props.onAdd(newItem.value);
  },

  render: function() {
    return (<form id="add-todo" onSubmit={this.handleSubmit}>
      <input type="text" required="required" ref="newItem"/>
      <input type="submit" value="Add Todo"/>
    </form>);
  }

});

module.exports = TodoForm;
