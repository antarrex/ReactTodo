var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var Main = require('Main');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

store.subscribe(() => {
  var state = store.getState();
  TodoAPI.setTodos(state.todos);
});

var initialTodos =  TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById('app')
);
