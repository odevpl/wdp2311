import React from 'react';

import styles from './Homepage.module.scss';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import BrandsSlider from '../Brands/Brands';
import Blog from '../Blog/Blog';
import Promotional from '../../features/Promotional/Promotional';
import Chatbot from '../../views/Chatbot/Chatbot';
import Gallery from '../../layout/Gallery/Gallery';
import SectionBlog from '../SectionBlog/SectionBlog';

const Homepage = () => (
  <div className={styles.root}>
    <Promotional />
    <FeatureBoxes />
    <NewFurniture />
    <Blog />
    <Chatbot />
    <SectionBlog />
    <BrandsSlider />
    <Gallery />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
