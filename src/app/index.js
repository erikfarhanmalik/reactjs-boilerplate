var React = require('react');
var createReactClass = require('create-react-class');
var ReactDom = require('react-dom');

var TodoComponent = createReactClass({
  render: function(){
    return(
      <h1>Nice!</h1>
    )
  }
});

ReactDom.render(<TodoComponent/>, document.getElementById('todo-wrapper'));
