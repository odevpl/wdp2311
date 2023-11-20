import React from 'react';
import PropTypes from 'prop-types';
import styles from './RightBoxTop.module.scss';

const RightBoxTop = ({ title, description, imgSrc, subtitle }) => {
  const boldTitle = title.slice(0, -6);

  return (
    <div className={styles.rightBox}>
      <img src={imgSrc} alt={title} />
      <div className={styles.rightContent}>
        <div className={styles.titleContainer}>
          <h2>
            <b>{boldTitle}</b> <span>{title.slice(-6)}</span>
          </h2>
          <h3 className={subtitle ? 'd-block' : 'd-none'}>{subtitle}</h3>
        </div>
        <span className={styles.description}>{description}</span>
      </div>
    </div>
  );
};

RightBoxTop.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default RightBoxTop;
