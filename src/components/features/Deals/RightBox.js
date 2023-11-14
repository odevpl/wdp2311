import React from 'react';
import PropTypes from 'prop-types';
import styles from './RightBox.module.scss';

const RightBox = ({ title, description, imgSrc, subtitle }) => {
  return (
    <div className={`col-md-12 ${styles.rightBox}`}>
      <img className={styles.rightBackground} src={imgSrc} alt={title} />
      <div className={styles.overlay}>
        <div className={styles.rightContent}>
          <div className={styles.titleContainer}>
            <h2>{title}</h2>
          </div>
          <h3>{subtitle}</h3>
          <span className={styles.description}>{description}</span>
        </div>
      </div>
    </div>
  );
};

RightBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default RightBox;
