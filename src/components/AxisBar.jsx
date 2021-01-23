import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import styles from './AxisBar.module.css';

import AxisBarIcon from './AxisBarIcon';

function AxisBar({ value, maxValue, axisData }) {
  const normalize = (val, min, max) => (val - min) / (max - min);

  const valuePercent = (normalize(value, -maxValue, maxValue) * 100).toFixed(1);

  return (
    <div className={styles.axisbar}>
      <div className={styles.labels}>
        <Header as="h2" style={{ margin: 0 }}>{axisData.left}</Header>
        <Header as="h2" style={{ margin: 0 }}>{axisData.right}</Header>
      </div>
      <div className={styles.axis}>
        { axisData.left_icon && <AxisBarIcon icon={axisData.left_icon} color={axisData.left_color} alt={axisData.left} /> }
        <div className={`${styles.bar_background} ui large progress`} style={{ backgroundColor: axisData.right_color }} data-percent={valuePercent}>
          <div className={`${styles.bar} bar`} style={{ width: `${valuePercent}%`, backgroundColor: axisData.left_color }} />
          <div className={`${styles.value} ${styles.value_left}`}>{`${valuePercent}%`}</div>
          <div className={`${styles.value} ${styles.value_right}`}>{`${(100 - valuePercent).toFixed(1)}%`}</div>
        </div>
        { axisData.right_icon && <AxisBarIcon icon={axisData.right_icon} color={axisData.right_color} alt={axisData.right} /> }
      </div>
    </div>
  );
}

AxisBar.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,

  axisData: PropTypes.shape({
    left: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
    left_icon: PropTypes.string.isRequired,
    right_icon: PropTypes.string.isRequired,
    left_color: PropTypes.string.isRequired,
    right_color: PropTypes.string.isRequired,
  }).isRequired,
};

export default AxisBar;
