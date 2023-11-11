import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import ClientFeedback from '../ClientFeedback/ClientFeedback';

import Promotional from '../../features/Promotional/Promotional';
import BrandsSlider from '../Brands/Brands';


const Homepage = () => (
  <div className={styles.root}>
    <Promotional />
    <FeatureBoxes />
    <NewFurniture />
    <BrandsSlider />
    <ClientFeedback />

  </div>
);

// Homepage.propTypes = {};

export default Homepage;
