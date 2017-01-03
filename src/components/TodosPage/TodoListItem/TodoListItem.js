import React from 'react';

class TodoListItem extends React.Component {
  render () {
    return (<h3>{this.props.todo}</h3>);
  }
}


TodoListItem.propTypes = {
  todo: React.PropTypes.string
};

export default TodoListItem;