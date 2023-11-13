import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import Reviews from '../../features/Reviews/Reviews';

const ProductPage = () => (
  <div className={styles.root}>
    <div className='container'>
      This is ProductPage
      <Reviews />
    </div>
  </div>
);

// ProductPage.propTypes = {};

export default ProductPage;
