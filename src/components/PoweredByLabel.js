import React from 'react';
import { Header } from 'semantic-ui-react';
import styles from './PoweredByLabel.module.css';

function PoweredByLabel(props) {
  return (
    <Header as='h5' className={styles.poweredby} textAlign={props.textAlign || 'center'} style={{float: props.float || 'unset', margin: props.margin || 'revert'}} disabled>Powered by <a href='https://github.com/CrossCRS/yapve'>YAPVE</a></Header>
  )
}

export default PoweredByLabel;