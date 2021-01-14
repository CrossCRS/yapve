import React from 'react';
import { Header } from 'semantic-ui-react';
import styles from './AxisBar.module.css';

function AxisBar(props) {
  const normalize = (val, min, max) => {
    return (val - min) / (max - min);
  }
  
  const value_percent = (normalize(props.value, -props.maxValue, props.maxValue)*100).toFixed(1);

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div>
        <Header as='h2' style={{float: 'left', margin: 0}}>{props.axisData.left}</Header>
        <Header as='h2' style={{float: 'right', margin: 0}}>{props.axisData.right}</Header>
      </div>
      <div className={`${styles.bar_background} ui big progress`} style={{backgroundColor: props.axisData.right_color}} data-percent={value_percent}>
        <div className={`${styles.bar} bar`} style={{width: value_percent+'%', backgroundColor: props.axisData.left_color}} />
        <div className={`${styles.value} ${styles.value_left}`}>{value_percent+'%'}</div>
        <div className={`${styles.value} ${styles.value_right}`}>{(100-value_percent).toFixed(1)+'%'}</div>
      </div>
    </div>
  )
}

export default AxisBar;