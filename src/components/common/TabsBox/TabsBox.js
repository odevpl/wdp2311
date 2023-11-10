import React from 'react';
import styles from './TabsBox.module.scss';
import TabButton from './TabButton';
import PropTypes from 'prop-types';

function TabsBox({ tabs = [], children }) {
  return (
    <div className={styles.tabsBox}>
      <div className={styles.tabsContainer}>
        {tabs.map(tab => (
          <TabButton active={tabs.indexOf(tab) === 1} key={tab}>
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
  tabs: PropTypes.shape({
    map: PropTypes.func,
    indexOf: PropTypes.func,
  }),
  children: PropTypes.node,
};
