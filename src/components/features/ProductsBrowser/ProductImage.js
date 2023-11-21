import React from 'react';
import PropTypes from 'prop-types';

function ProductImage({ selectedImage, className, onClick }) {
  return (
    <img
      key={selectedImage}
      src={selectedImage}
      alt={selectedImage}
      className={className}
      onClick={onClick}
    />
  );
}
export default ProductImage;

ProductImage.propTypes = {
  className: PropTypes.string,
  selectedImage: PropTypes.string,
  onClick: PropTypes.func,
};
