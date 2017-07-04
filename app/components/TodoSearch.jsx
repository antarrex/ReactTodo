var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';

var TodoSearch = React.createClass({
  render: function() {
    var {dispatch, showCompleted, searchText} = this.props;

    return (
      <div className="search-bar">
        <TextField
          fullWidth={true}
          type="text"
          floatingLabelText="Поиск"
          ref={(searchText) => { this.input = searchText; }}
          onChange={() => {
            var searchText = this.input.getValue();
            dispatch(actions.setSearchText(searchText));
          }}/>
        <Toggle label="Показать завершенные" labelPosition="right" onToggle={() => {
            dispatch(actions.toggleShowCompleted());
          }} />
      </div>
    );
  }
});

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    };
  }
)(TodoSearch);
