import React from 'react';
import ProductList from '../ProductList/ProductList';
import { useParams } from 'react-router-dom';
import Banner from '../Banner/Banner';

function Shop() {
  const { categoryId } = useParams();
  return (
    <>
      <Banner categoryId={categoryId} />
      <ProductList categoryId={categoryId} />
    </>
  );
}

export default Shop;
