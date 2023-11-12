import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import BrandsSlider from '../Brands/Brands';
import Blog from '../Blog/Blog';
const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <NewFurniture />
    <Blog />
    <BrandsSlider />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
