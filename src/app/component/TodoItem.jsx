var React = require('react');
require('../css/todo-item.css');
import ReactTooltip from 'react-tooltip'

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    this.props.onDelete(this.props.item);
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

export default TodoItem;
