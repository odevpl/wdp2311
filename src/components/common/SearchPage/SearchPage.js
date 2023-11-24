import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductBox from '../ProductBox/ProductBox';
import { getAll } from '../../../redux/productsRedux';
import styles from '../../features/NewFurniture/NewFurniture.module.scss';

const SearchPage = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');

  const allProducts = useSelector(getAll);

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className='col-12 col-md-4'>
                <ProductBox {...product} />
              </div>
            ))
          ) : (
            <div className='col-12 pt-5 pb-5'>
              <p style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center' }}>
                Not Found
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
