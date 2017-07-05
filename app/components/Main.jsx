var React = require('react');
var uuid = require('node-uuid');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';


var Main = React.createClass({
  render: function() {
    return (
      <div>
        <div className="container">
            <h1 className="main-header">React Todo List</h1>
            <TodoSearch/>
            <TodoList/>
            <AddTodo/>
        </div>
      </div>
    );
  }
});

module.exports = Main;
