import React from 'react';
import PropTypes from 'prop-types';

function PoweredByLabel({ className }) {
  return (
    <h5 className={`text-gray-700 font-light text-sm ${className}`}>
      Powered by <a href="https://github.com/CrossCRS/yapve">YAPVE</a>
    </h5>
  );
}

PoweredByLabel.propTypes = {
  className: PropTypes.string,
};

PoweredByLabel.defaultProps = {
  className: '',
};

export default PoweredByLabel;
