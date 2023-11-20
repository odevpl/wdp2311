import React from 'react';
import ProductList from '../ProductList/ProductList';
import { useParams } from 'react-router-dom';

function Shop() {
  const { categoryId } = useParams();
  return <ProductList categoryId={categoryId} />;
}

export default Shop;
