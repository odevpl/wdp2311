import React from 'react';
import PropTypes from 'prop-types';
import styles from './RightBoxDown.module.scss';

const RightBoxDown = ({ title, description, imgSrc, subtitle }) => {
  const boldTitle = title.slice(0, 7);

  return (
    <div className={styles.rightBox}>
      <img className={styles.rightBackground} src={imgSrc} alt={title} />
      <div className={styles.rightContent}>
        <div className={styles.titleContainer}>
          <h2>
            <b>{boldTitle}</b> <span>{title.slice(-10)}</span>
          </h2>
          <h3 className={subtitle ? 'd-block' : 'd-none'}>{subtitle}</h3>
          <span className={styles.description}>{description}</span>
        </div>
      </div>
    </div>
  );
};

RightBoxDown.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default RightBoxDown;
