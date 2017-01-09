import React from 'react';

const ButtonFilter = ({text, filterCriteria, filterAction}) => {
  return (
    <button onClick={() => {filterAction(filterCriteria);}}>{text}</button>
  );
};

ButtonFilter.propTypes = {
  text: React.PropTypes.string,
  filterCriteria: React.PropTypes.string,
  filterAction: React.PropTypes.func
};

export default ButtonFilter;