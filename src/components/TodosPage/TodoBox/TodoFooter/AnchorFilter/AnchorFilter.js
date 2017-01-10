import React from 'react';

const AnchorFilter = ({text, filterCriteria, filterAction}) => {
  return (
    <a className="selected" onClick={() => {filterAction(filterCriteria);}}>{text}</a>
  );
};

AnchorFilter.propTypes = {
  text: React.PropTypes.string,
  filterCriteria: React.PropTypes.string,
  filterAction: React.PropTypes.func
};

export default AnchorFilter;