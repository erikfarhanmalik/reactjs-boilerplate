var React = require('react');
var createReactClass = require('create-react-class');
var ReactDom = require('react-dom');

var TodoComponent = require('./component/TodoComponent');

ReactDom.render(<TodoComponent label="Todo List"/>, document.getElementById('todo-wrapper'));
