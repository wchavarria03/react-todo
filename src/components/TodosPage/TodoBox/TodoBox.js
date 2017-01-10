import React from 'react';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
import TodoFooter from './TodoFooter/TodoFooter';

const TodoBox = ({itemsLength, filters, todos, newTodo, add, remove, toggle, filterAction, changeInput}) => {
  return (
    <div>
      <TodoForm addTodo={add} newTodo={newTodo} changeInput={changeInput}/>
      <TodoList todos={todos} remove={remove} toggle={toggle}/>
      <TodoFooter itemsLength={itemsLength} filters={filters} filterAction={filterAction}/>
    </div>
  );
};

TodoBox.propTypes = {
  add: React.PropTypes.func,
  filterAction: React.PropTypes.func,
  filters: React.PropTypes.array,
  todos: React.PropTypes.array,
  newTodo: React.PropTypes.string,
  remove: React.PropTypes.func,
  toggle: React.PropTypes.func,
  itemsLength: React.PropTypes.number,
  changeInput: React.PropTypes.func
};

export default TodoBox;