import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './FeatureBox.module.scss';

const FeatureBox = ({ icon, children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.root} ${isActive ? styles.active : ''}`}>
      {icon && (
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon className={styles.icon} icon={icon} />
        </div>
      )}
      <div className={styles.content}>
        <a href='#' className={styles.content} onClick={handleClick}>
          {' '}
          {children}
        </a>
      </div>
    </div>
  );
};

FeatureBox.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.object,
};

export default FeatureBox;
