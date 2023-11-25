import React from 'react';
import useLimitVisibleProducts from './useLimitVisibleProducts';
import ProductBox from '../../common/ProductBox/ProductBox';
import styles from './NewFurnitureShop.module.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getByName } from '../../../redux/categoriesRedux';
import { getAll } from '../../../redux/productsRedux';

function NewFurnitureShop({ categoryId, productsPerPage = 6 }) {
  const category = useSelector(state => getByName(state, categoryId));
  const products = useSelector(getAll);
  const productsFromCategory = category
    ? products.filter(product => product.category === category.id)
    : products;

  const { visibleProducts } = useLimitVisibleProducts(
    productsFromCategory,
    productsPerPage
  );

  return (
    <div className={styles.container}>
      {visibleProducts.map(product => (
        <ProductBox key={product.id} {...product} />
      ))}
    </div>
  );
}

NewFurnitureShop.propTypes = {
  categoryId: PropTypes.string,
  productsPerPage: PropTypes.number,
};

export default NewFurnitureShop;
