import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Banner.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function Banner({ categoryId }) {
  return (
    <div className={'container ' + styles.container}>
      <div className={styles.banner}>
        {categoryId === 'Furniture' ? (
          <h1 className={styles.bannerTitle}>
            Bedroom <span className='font-weight-bold'> Furniture</span>
          </h1>
        ) : (
          <h1 className={styles.bannerTitle + ' justify-content-center'}>
            <span className='font-weight-bold '>
              {categoryId}
              {categoryId ? 'S' : ''}
            </span>
          </h1>
        )}
        <h3 className={styles.bannerSubtitle}>
          Always <span className={styles.subtitleColor}>25%</span>off or more
        </h3>
      </div>

      <div className={styles.srcLinks}>
        <Link to={'/'}> Home</Link>

        <FontAwesomeIcon icon={faAngleRight} />

        <Link to={`/product/${categoryId}`} className={styles.active}>
          {categoryId}
        </Link>
      </div>
    </div>
  );
}

Banner.propTypes = {
  categoryId: PropTypes.string,
};

export default Banner;
