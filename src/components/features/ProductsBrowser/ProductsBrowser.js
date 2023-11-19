import React from 'react';
import styles from './ProductsBrowser.module.scss';
import ImageSlider from '../../common/ImageSlider/ImageSlider';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import ActionButtons from './ActionButtons';
import PriceRateBox from './PriceRateBox';
import useGetImages from './useGetImages';
import { useState } from 'react';
import PropTypes from 'prop-types';

function ProductsBrowser({ tabActive }) {
  const products = useSelector(getAll);
  const selectedProduct = products[Math.floor(Math.random() * products.length)];

  const [selectedProductImage] = useGetImages([selectedProduct], 1);

  const tabActiveToRange = {
    featured: { start: 0, end: 11 },
    'top seller': { start: 12, end: 23 },
    'sale off': { start: 24, end: 36 },
    'top rated': { start: 36, end: 47 },
  };
  const { start, end } = tabActiveToRange[tabActive] || tabActiveToRange.default;
  const images = useGetImages(products.slice(start, end + 1), 12);
  console.log('images ', images);

  const [selectedImage, setelectedImage] = useState(selectedProductImage);

  const handleClickImage = newClickedImage => {
    setelectedImage(newClickedImage);
  };

  const randomImages = images[Math.floor(Math.random() * images.length)];

  return (
    <div className={styles.wrapper}>
      <div className={styles.selectedProduct}>
        <img src={randomImages} alt={randomImages} className={styles.selectedImage} />
        <ActionButtons product={selectedProduct} />
        <PriceRateBox product={selectedProduct} />
      </div>
      <ImageSlider images={images} onChildImageClick={handleClickImage} />
    </div>
  );
}

export default ProductsBrowser;

ProductsBrowser.propTypes = {
  tabActive: PropTypes.string,
};
