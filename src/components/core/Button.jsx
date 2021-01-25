/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

function Button({ className, color, hoverColor, ringColor, onClick, children, ...other }) {
  return (
    <button
      type="button"
      className={`px-4 py-2 border border-transparent rounded-sm shadow-sm font-semibold text-white bg-${color} hover:bg-${hoverColor} focus:outline-none focus:ring focus:ring-${ringColor} ${className}`}
      onClick={onClick}
      {...other}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  ringColor: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
};

Button.defaultProps = {
  className: '',
  color: 'blue-500',
  hoverColor: 'blue-600',
  ringColor: 'blue-200',
  children: '',
  onClick: undefined,
};

export default Button;
