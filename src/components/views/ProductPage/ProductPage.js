import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';

const ProductPage = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.banner}>
        <h1 className={styles.bannerTitle}>
          Bedroom <span className='font-weight-bold'>Furniture</span>
        </h1>
        <h3 className={styles.bannerSubtitle}>
          Always <span className={styles.subtitleColor}>25%</span>off or more
        </h3>
      </div>
    </div>
  </div>
);

// ProductPage.propTypes = {};

export default ProductPage;
