import React from 'react';

import styles from './Homepage.module.scss';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import BrandsSlider from '../Brands/Brands';
import Blog from '../Blog/Blog';
import Promotional from '../../features/Promotional/Promotional';
import Chatbot from '../../views/Chatbot/Chatbot';

const Homepage = () => (
  <div className={styles.root}>
    <Promotional />
    <FeatureBoxes />
    <NewFurniture />
    <Blog />
    <Chatbot />
    <BrandsSlider />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
