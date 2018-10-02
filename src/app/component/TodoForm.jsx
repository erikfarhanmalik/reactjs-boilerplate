var React = require('react');
require('../css/todo-form.css')

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.newItemInputText = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAdd(this.newItemInputText.current.value);
    this.newItemInputText.current.value = '';
  }

  render () {
    return (<form id="add-todo" onSubmit={this.handleSubmit}>
      <input type="text" required="required" ref={this.newItemInputText}/>
      <input type="submit" value="Add Todo"/>
    </form>);
  }

};

export default TodoForm;
