import React from 'react';
import AnchorFilter from './AnchorFilter/AnchorFilter';

const TodoFooter = ({itemsLength, filters, filterAction}) => {
  let filtersNodes =  filters.map((filter, i) => {
    return (
      <li key={i}><AnchorFilter text={filter.text} filterCriteria={filter.filterCriteria} filterAction={filterAction}/></li>
    );
  });
  //TODO: Change the item count to show the total and the filtered amount
  return (
    <div className="footer">
      <span className="todo-count">{itemsLength} items</span>
      <ul className="filters">
        {filtersNodes}
      </ul>
    </div>
  );
};

TodoFooter.propTypes = {
  itemsLength: React.PropTypes.number,
  filters: React.PropTypes.array,
  filterAction: React.PropTypes.func
};

export default TodoFooter;