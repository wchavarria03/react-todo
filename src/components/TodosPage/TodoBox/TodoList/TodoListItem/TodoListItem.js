import React from 'react';

const TodoListItem = ({todo, remove, toggle}) => {
  //TODO: Change the hard code string COMPLETED
  return (
    <li>
      <input className="toggle" type="checkbox" checked={todo.status === 'COMPLETED'} onChange={() => {toggle(todo.id);}}/>
      <label>{todo.text}</label>
      <button className="destroy" onClick={() => {remove(todo.id);}}></button>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: React.PropTypes.object,
  remove: React.PropTypes.func,
  toggle: React.PropTypes.func
};

export default TodoListItem;