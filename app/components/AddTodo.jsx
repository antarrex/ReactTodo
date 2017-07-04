var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

var AddTodo = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var text = this.todo.getValue();

    if(text.length > 0) {
      dispatch(actions.addTodo(text));
    } else {
      this.todo.focus();
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <TextField
            fullWidth={true}
            type="text"
            name="todo"
            floatingLabelText="Введите текст"
            ref={(input) => { this.todo = input; }}/>
          <RaisedButton fullWidth={true} primary={true} label="Добавить запись" type="submit"/>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo)
