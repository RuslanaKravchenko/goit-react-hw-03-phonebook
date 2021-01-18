import React from 'react';
import PropTypes from 'prop-types';
import FilterFild from './FilterStyled';

const Filter = ({ onChange, filter }) => {
  return (
    <FilterFild>
      <input
        className="filter_input"
        placeholder="Find by name..."
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </FilterFild>
  );
};
export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
