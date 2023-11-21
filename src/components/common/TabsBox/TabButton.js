import React from 'react';
import PropTypes from 'prop-types';

import styles from './TabsBox.module.scss';

function TabButton({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.tabButton} ${active && styles.active}`}
    >
      {children}
    </button>
  );
}

export default TabButton;

TabButton.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
