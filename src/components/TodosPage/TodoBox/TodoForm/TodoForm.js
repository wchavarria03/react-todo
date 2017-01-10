import React from 'react';

const TodoForm = ({addTodo, newTodo, changeInput}) => {
  let input;
  return (
    <div className="header">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={addTodo}
        onChange={changeInput}
        value={newTodo}
        ref={node => {
          input = node;
        }}
      />
    </div>
  );
};

TodoForm.propTypes= {
  addTodo: React.PropTypes.func,
  newTodo: React.PropTypes.string,
  changeInput: React.PropTypes.func,
};

export default TodoForm;