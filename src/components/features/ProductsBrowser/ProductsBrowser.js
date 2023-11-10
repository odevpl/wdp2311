import React from 'react';
import styles from './ProductsBrowser.module.scss';
import ImageSlider from '../../common/ImageSlider/ImageSlider';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import ActionButtons from './ActionButtons';
import PriceRateBox from './PriceRateBox';

function ProductsBrowser() {
  const products = useSelector(getAll);
  const selectedProduct = products[Math.floor(Math.random() * products.length)];

  return (
    <div className={styles.wrapper}>
      <div className={styles.selectedProduct}>
        <img
          src={selectedProduct.img}
          alt={selectedProduct.img}
          className={styles.selectedImage}
        />
        <ActionButtons product={selectedProduct} />
        <PriceRateBox product={selectedProduct} />
      </div>
      <ImageSlider images={products} />
    </div>
  );
}

export default ProductsBrowser;
