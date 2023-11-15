import React from 'react';
import PropTypes from 'prop-types';

import styles from './Heading.module.scss';

function Heading({ children }) {
  return (
    <div className={'col-auto ' + styles.heading}>
      <h3>{children}</h3>
    </div>
  );
}

export default Heading;

Heading.propTypes = {
  children: PropTypes.node,
};
