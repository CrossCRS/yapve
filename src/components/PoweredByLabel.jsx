import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import styles from './PoweredByLabel.module.css';

function PoweredByLabel({ textAlign, margin }) {
  return (
    <Header
      as="h5"
      className={styles.poweredby}
      textAlign={textAlign}
      style={{ margin }}
      disabled
    >
      Powered by <a href="https://github.com/CrossCRS/yapve">YAPVE</a>
    </Header>
  );
}

PoweredByLabel.propTypes = {
  textAlign: PropTypes.string,
  margin: PropTypes.string,
};

PoweredByLabel.defaultProps = {
  textAlign: undefined,
  margin: undefined,
};

export default PoweredByLabel;
