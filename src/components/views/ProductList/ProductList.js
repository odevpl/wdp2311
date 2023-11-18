import React from 'react';
import BrandsSlider from '../../features/BrandsSlider/BrandsSlider';

const ProductList = () => {
  return (
    <div className='my-5'>
      <div className='container'>
        <div className='row'>
          <h2 className='mx-auto'>BANNER</h2>
        </div>
        <div className='row'>
          <div className='col-9'>Product List</div>
          <div className='col-3'>filters</div>
        </div>
        <div className='row'>
          <BrandsSlider />
        </div>
      </div>
    </div>
  );
};

// ProductList.propTypes = {};

export default ProductList;
