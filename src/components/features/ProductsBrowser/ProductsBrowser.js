import React from 'react';
import styles from './ProductsBrowser.module.scss';
import ImageSlider from '../../common/ImageSlider/ImageSlider';
import { useSelector } from 'react-redux';
import { getProductsByTab } from '../../../redux/productsRedux';
import ActionButtons from './ActionButtons';
import PriceRateBox from './PriceRateBox';
import useGetImages, { getImage } from './useGetImages';
import PropTypes from 'prop-types';
import ProductImage from './ProductImage';
import { useEffect, useState } from 'react';
import useFade from '../../common/ImageSlider/useFade';

function ProductsBrowser({ tabActive }) {
  const { fadeClass, doFade } = useFade(styles.fadeOut, styles.fadeIn);

  const products = useSelector(state => getProductsByTab(state, tabActive));
  const images = useGetImages(products);

  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const handleClickImage = image =>
    setSelectedProduct(products.find(product => image.includes(product.name)));

  const selectFirstProduct = () => setSelectedProduct(products[0]);

  useEffect(selectFirstProduct, [tabActive]);
  useEffect(doFade, [selectedProduct]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.selectedProduct}>
        <ProductImage
          selectedImage={getImage(selectedProduct)}
          className={`${styles.selectedImage} ${styles.productsContainer} ${fadeClass}`}
        />
        <ActionButtons product={selectedProduct} />
        <PriceRateBox product={selectedProduct} />
      </div>
      <ImageSlider
        images={images}
        selectedImage={getImage(selectedProduct)}
        onChildImageClick={handleClickImage}
      />
    </div>
  );
}

export default ProductsBrowser;

ProductsBrowser.propTypes = {
  tabActive: PropTypes.string,
};
