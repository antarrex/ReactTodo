var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var AddTodo = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var text = this.refs.todo.value;
    
    if(text.length > 0) {
      this.refs.todo.value = '';
      dispatch(actions.addTodo(text));
    } else {
      this.refs.todo.focus();
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input name='todo' type='text' ref='todo' placeholder='Введите текст' />
          <button className='button hollow expanded' type='submit'>Добавить запись</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo)
