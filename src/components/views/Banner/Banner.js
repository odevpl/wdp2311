import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Banner.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Banner() {
  return (
    <div className={'container ' + styles.container}>
      <div className={styles.banner}>
        <h1 className={styles.bannerTitle}>
          Bedroom <span className='font-weight-bold'> Furniture</span>
        </h1>
        <h3 className={styles.bannerSubtitle}>
          Always <span className={styles.subtitleColor}>25%</span>off or more
        </h3>
      </div>

      <div className={styles.srcLinks}>
        <Link to={'/'}> Home</Link>

        <FontAwesomeIcon icon={faAngleRight} />

        <Link to={'/product/furniture'} className={styles.active}>
          Furniture
        </Link>
      </div>
    </div>
  );
}

export default Banner;
