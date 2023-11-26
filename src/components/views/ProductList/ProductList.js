import React from 'react';
import BrandsSlider from '../../features/BrandsSlider/BrandsSlider';
import NewFurnitureShop from '../../features/NewFurniture/NewFurnitureShop';
import PropTypes from 'prop-types';

const ProductList = ({ categoryId }) => {
  return (
    <div className='my-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <NewFurnitureShop categoryId={categoryId} />
          </div>
        </div>
        <div className='row'>
          <BrandsSlider />
        </div>
      </div>
    </div>
  );
};

ProductList.propTypes = {
  categoryId: PropTypes.string,
};

export default ProductList;
