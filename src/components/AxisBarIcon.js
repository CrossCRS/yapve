import React from 'react';
import styles from './AxisBarIcon.module.css';

function AxisBarIcon(props) {
  return (
    <img
      className={styles['axis-icon']}
      src={process.env.PUBLIC_URL + '/img/icons/' + props.icon}
      alt={props.alt}
      style={{borderColor: props.color}}
    />
  )
}

export default AxisBarIcon;