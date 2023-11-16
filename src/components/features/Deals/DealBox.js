import React from 'react';
import PropTypes from 'prop-types';
import styles from './DealBox.module.scss';

const DealBox = ({ title, description, imgSrc, subtitle }) => {
  return (
    <div className={styles.dealBox}>
      <div className={styles.overlay}></div>
      <div className={styles.dealContent}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <img className={styles.dealBackground} src={imgSrc} alt={title} />
    </div>
  );
};

DealBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default DealBox;
