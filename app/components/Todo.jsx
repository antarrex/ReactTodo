var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import Checkbox from 'material-ui/Checkbox';

var Todo = React.createClass({
  render: function() {
    var {id, text, completed, dispatch} = this.props;
    var todoClass = completed ? 'todo-item completed' : 'todo-item';
    return (
      <div className={todoClass} onClick={() => {
        dispatch(actions.toggleTodo(id));
      }}>
        <Checkbox label={text} checked={completed}/>
      </div>
    );
  }
});

module.exports = connect()(Todo);
