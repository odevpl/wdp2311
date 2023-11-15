import React from 'react';
import styles from './ProductsBrowser.module.scss';
import ImageSlider from '../../common/ImageSlider/ImageSlider';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import ActionButtons from './ActionButtons';
import PriceRateBox from './PriceRateBox';
import useGetImages from './useGetImages';

function ProductsBrowser() {
  const products = useSelector(getAll);
  const selectedProduct = products[Math.floor(Math.random() * products.length)];

  const [selectedProductImage] = useGetImages([selectedProduct], 1);
  const images = useGetImages(products, 7);

  return (
    <div className={styles.wrapper}>
      <div className={styles.selectedProduct}>
        <img
          src={selectedProductImage}
          alt={selectedProductImage}
          className={styles.selectedImage}
        />
        <ActionButtons product={selectedProduct} />
        <PriceRateBox product={selectedProduct} />
      </div>
      <ImageSlider {...{ images }} />
    </div>
  );
}

export default ProductsBrowser;
