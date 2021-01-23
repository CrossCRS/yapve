import React from 'react';
import PropTypes from 'prop-types';
import styles from './AxisBarIcon.module.css';

function AxisBarIcon({ icon, alt, color }) {
  return (
    <img
      className={styles.axis_icon}
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
