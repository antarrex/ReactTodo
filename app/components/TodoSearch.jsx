var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var TodoSearch = React.createClass({
  render: function() {
    var {dispatch, showCompleted, searchText} = this.props;
    
    return (
      <div>
        <div>
          <input type="text" ref="searchText" placeholder="Поиск" value={searchText} onChange={() => {
              var searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText));
            }} />
        </div>
        <div className="switch">
          <input id="completed-switch" className="switch-input" type="checkbox" ref="showCompleted" onChange={() => {
              dispatch(actions.toggleShowCompleted());
            }} />
          <label className="switch-paddle" htmlFor="completed-switch"></label>
          <label className="completed-label" htmlFor="completed-switch">
            Показать завершенные
          </label>
        </div>
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
