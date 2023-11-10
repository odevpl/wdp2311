import React from 'react';
import PropTypes from 'prop-types';

import styles from './TabsBox.module.scss';

function TabButton({ children, active }) {
  return (
    <button className={`${styles.tabButton} ${active && styles.active}`}>
      {children}
    </button>
  );
}

export default TabButton;

TabButton.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
};
