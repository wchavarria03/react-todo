import React from 'react';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
import TodoFooter from './TodoFooter/TodoFooter';

const TodoBox = ({itemsLength, filters, todos, add, remove, toggle, filterAction}) => {
  return (
    <div>
      <TodoForm addTodo={add}/>
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
  remove: React.PropTypes.func,
  toggle: React.PropTypes.func,
  itemsLength: React.PropTypes.number
};

export default TodoBox;