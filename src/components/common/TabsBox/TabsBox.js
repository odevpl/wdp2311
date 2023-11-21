import React from 'react';
import styles from './TabsBox.module.scss';
import TabButton from './TabButton';
import PropTypes from 'prop-types';
import { useState } from 'react';

function TabsBox({ tabs = [], children, onTabChange }) {
  const [localTabActive, setLocalTabActive] = useState(tabs[0]);

  const handleLocalTabChange = tab => {
    setLocalTabActive(tab);
    onTabChange(tab);
  };

  return (
    <div className={styles.tabsBox}>
      <div className={styles.tabsContainer}>
        {tabs.map(tab => (
          <TabButton
            onClick={() => handleLocalTabChange(tab)}
            active={tab === localTabActive}
            key={tab}
          >
            <h4>{tab}</h4>
          </TabButton>
        ))}
      </div>
      <div className={styles.contentWrapper}>{children}</div>
    </div>
  );
}

export default TabsBox;

TabsBox.propTypes = {
  tabs: PropTypes.array,
  children: PropTypes.node,
  onTabChange: PropTypes.func,
};
