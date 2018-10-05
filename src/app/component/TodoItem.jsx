import React from 'react';
import ReactTooltip from 'react-tooltip'
import axios from 'axios';
import {connect} from 'react-redux';

import {deleteTodo} from '../action/TodoActions';

import '../css/todo-item.css';

var api = axios.create({baseURL: 'http://localhost:8000/todo', timeout: 1000});
class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {

    api.delete(this.props.item._links.self.href).then(function(response) {
      this.props.handleDelete(this.props.item);
    }.bind(this)).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (<li>
      <div className="todo-item">
        <span className="item-name">{this.props.item.content}</span>
        <span className="item-remove" onClick={this.handleDelete}>
          <span data-tip="Delete todo"> x </span>
        </span>
        <ReactTooltip place="left" type="error" effect="solid"/>
      </div>
    </li>);
  }

}

const bindActionToPeroperty = (dispatch) => ({
  handleDelete: (item) => dispatch(deleteTodo(item))
});

export default connect((state) => ({}), bindActionToPeroperty)(TodoItem);
