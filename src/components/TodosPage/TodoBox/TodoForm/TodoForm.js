import React from 'react';

const TodoForm = ({addTodo}) => {
  let input;
  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        addTodo(input.value);
        input.value = '';
      }}>
        +
      </button>
    </div>
  );
};

TodoForm.propTypes= {
  addTodo: React.PropTypes.func
};

export default TodoForm;