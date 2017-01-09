import React from 'react';
import ButtonFilter from './ButtonFilter/ButtonFilter';

const TodoFooter = ({itemsLength, filters, filterAction}) => {
  let filtersNodes =  filters.map((filter, i) => {
    return (
      <ButtonFilter text={filter.text} key={i} filterCriteria={filter.filterCriteria} filterAction={filterAction}/>
    );
  });
  //TODO: Change the item count to show the total and the filtered amount
  return (
    <div>
      <h3>{itemsLength}</h3>
      <div>
        {filtersNodes}
      </div>
    </div>
  );
};

TodoFooter.propTypes = {
  itemsLength: React.PropTypes.number,
  filters: React.PropTypes.array,
  filterAction: React.PropTypes.func
};

export default TodoFooter;