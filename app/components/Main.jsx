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
            <TodoSearch/>
            <TodoList/>
            <AddTodo/>
        </div>
      </div>
    );
  }
});

module.exports = Main;
