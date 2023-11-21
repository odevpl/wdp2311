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
import ProductImage from './ProductImage';
import { useEffect } from 'react';

function ProductsBrowser({ tabActive }) {
  const products = useSelector(getAll);

  const [state, setState] = useState({
    isFading: false,
  });

  const filteredProducts = products.filter(product => {
    return product.tab === tabActive;
  });

  const selectedProduct =
    filteredProducts[Math.floor(Math.random() * filteredProducts.length)];

  const images = useGetImages(filteredProducts);

  const [selectedProductImage] = useGetImages([selectedProduct], 1);

  const [selectedImage, setSelectedImage] = useState(selectedProductImage);

  const handleClickImage = newClickedImage => {
    setSelectedImage(newClickedImage);
    setState({
      isFading: true,
    });
  };

  useEffect(() => {
    setSelectedImage(selectedProductImage);
    setState({
      isFading: true,
    });
  }, [selectedProductImage, tabActive]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.selectedProduct}>
        <ProductImage
          selectedImage={selectedImage}
          className={`${styles.selectedImage} ${styles.productsContainer} ${
            state.isFading ? styles.fadeOut : styles.fadeIn
          }`}
        />
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
