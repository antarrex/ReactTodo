var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var Todo = React.createClass({
  render: function() {
    var {id, text, completed, dispatch} = this.props;
    var todoClass = completed ? 'todo-item completed' : 'todo-item';
    return (
      <div className={todoClass} onClick={() => {
        dispatch(actions.toggleTodo(id));
      }}>
        <input type="checkbox" checked={completed} />
        <span className="todo-text">{text}</span>
      </div>
    );
  }
});

module.exports = connect()(Todo);
