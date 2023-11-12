import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promotional from '../../features/Promotional/Promotional';
// import BrandsSlider from '../Brands/Brands';
import Chatbot from '../../views/Chatbot/Chatbot';

const Homepage = () => (
  <div className={styles.root}>
    <Promotional />
    <FeatureBoxes />
    <NewFurniture />
    <Chatbot />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
