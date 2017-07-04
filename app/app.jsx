var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Main/>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
