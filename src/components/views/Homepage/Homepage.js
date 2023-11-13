import React from 'react';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promotional from '../../features/Promotional/Promotional';
import Chatbot from '../../views/Chatbot/Chatbot';
import BrandsSlider from '../Brands/Brands';

const Homepage = () => (
  <div className={styles.root}>
    <Promotional />
    <FeatureBoxes />
    <NewFurniture />
    <Chatbot />
    <BrandsSlider />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
