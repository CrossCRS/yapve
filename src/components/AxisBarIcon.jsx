import React from 'react';
import PropTypes from 'prop-types';

function AxisBarIcon({ icon, alt, color }) {
  return (
    <img
      className="w-16 border-4 rounded-sm"
      src={`${process.env.PUBLIC_URL}/img/icons/${icon}`}
      alt={alt}
      style={{ borderColor: color }}
    />
  );
}

AxisBarIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default AxisBarIcon;
