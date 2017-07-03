var React = require('react');
var uuid = require('node-uuid');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row">
          <div className="small-centered column small-11 medium-6">
            <TodoSearch/>
            <TodoList/>
            <AddTodo/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
