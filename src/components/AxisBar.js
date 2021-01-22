import React from 'react';
import { Header } from 'semantic-ui-react';
import styles from './AxisBar.module.css';

import AxisBarIcon from './AxisBarIcon';

function AxisBar(props) {
  const normalize = (val, min, max) => {
    return (val - min) / (max - min);
  }
  
  const value_percent = (normalize(props.value, -props.maxValue, props.maxValue)*100).toFixed(1);

  return (
    <div className={styles.axisbar}>
      <div className={styles.labels}>
        <Header as='h2' style={{ margin: 0 }}>{props.axisData.left}</Header>
        <Header as='h2' style={{ margin: 0 }}>{props.axisData.right}</Header>
      </div>
      <div className={styles.axis}>
        { props.axisData.left_icon && <AxisBarIcon icon={props.axisData.left_icon} color={props.axisData.left_color} alt={props.axisData.left} /> }
        <div className={`${styles.bar_background} ui large progress`} style={{backgroundColor: props.axisData.right_color}} data-percent={value_percent}>
          <div className={`${styles.bar} bar`} style={{width: value_percent+'%', backgroundColor: props.axisData.left_color}} />
          <div className={`${styles.value} ${styles.value_left}`}>{value_percent+'%'}</div>
          <div className={`${styles.value} ${styles.value_right}`}>{(100-value_percent).toFixed(1)+'%'}</div>
        </div>
        { props.axisData.right_icon && <AxisBarIcon icon={props.axisData.right_icon} color={props.axisData.right_color} alt={props.axisData.right} /> }
      </div>
    </div>
  )
}

export default AxisBar;