import React from 'react';
import PropTypes from 'prop-types';

function Filter({ onChange, filterText }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={filterText} placeholder="Search..." />
    </div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filterText: PropTypes.string,
};

export default Filter;
