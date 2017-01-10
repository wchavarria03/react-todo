import React from 'react';

const TodoTitle = ({title}) => {
  return(
    <h3 className="title">{title}</h3>
  );
};

TodoTitle.propTypes = {
  title :React.PropTypes.string
};

export default TodoTitle;