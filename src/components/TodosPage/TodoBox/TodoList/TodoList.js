import React from 'react';
import TodoListItem from './TodoListItem/TodoListItem';

const TodoList = ({todos, remove, toggle}) => {
  const todoNode = todos.map((todo) => {
    return (<TodoListItem todo={todo} key={todo.id} toggle={toggle} remove={remove}/>);
  });
  return (<ul className="todo-list">{todoNode}</ul>);
};

TodoList.propTypes = {
  todos: React.PropTypes.array,
  remove: React.PropTypes.func,
  toggle: React.PropTypes.func
};

export default TodoList;