import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import {addTodo} from '../action/TodoActions';

import '../css/todo-form.css';

var api = axios.create({baseURL: 'http://localhost:8000/todo', timeout: 1000});
class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.newItemInputText = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    api.post("/", {content: this.newItemInputText.current.value}).then(function(response) {
      this.props.handleSubmit(response.data);
      this.newItemInputText.current.value = '';
    }.bind(this)).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (<form id="add-todo" onSubmit={this.handleSubmit}>
      <input type="text" required="required" ref={this.newItemInputText}/>
      <input type="submit" value="Add Todo"/>
    </form>);
  }

};

const bindActionToPeroperty = (dispatch) => ({
  handleSubmit: (todo) => dispatch(addTodo(todo))
});

export default connect((state) => ({}), bindActionToPeroperty)(TodoForm);
