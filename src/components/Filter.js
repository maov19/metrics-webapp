// import React from 'react';
// import PropTypes from 'prop-types';

// const filterStyle = {
//   backgroundColor: '#0c2553bb',
//   color: '#ffffff',
//   fontWeight: 'bold',
//   border: 'none',
// };

// function Filter({ onChange, filterText }) {
//   const handleChange = (event) => {
//     onChange(event.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         onChange={handleChange}
//         value={filterText}
//         placeholder="Search coin"
//         style={filterStyle}
//       />
//     </div>
//   );
// }

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   filterText: PropTypes.string,
// };

// export default Filter;

import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function Filter({ onChange, filterText }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const inputRef = useRef(null);

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        value={filterText}
        placeholder="Search..."
        ref={inputRef}
        style={{
          backgroundColor: '#0c2553bb',
          color: '#ffffff',
          fontWeight: 'bold',
          border: 'none',
        }}
      />
    </div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filterText: PropTypes.string,
};

export default Filter;
