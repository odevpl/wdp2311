import React from 'react';
import BrandsSlider from '../../features/BrandsSlider/BrandsSlider';
import NewFurnitureShop from '../../features/NewFurniture/NewFurnitureShop';
import PropTypes from 'prop-types';

const ProductList = ({ categoryId }) => {
  return (
    <div className='my-5'>
      <div className='container'>
        <div className='row'>
          <h2 className='mx-auto'>BANNER</h2>
        </div>
        <div className='row'>
          <div className='col-9'>
            <NewFurnitureShop categoryId={categoryId} />
          </div>
          <div className='col-3'>filters</div>
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
