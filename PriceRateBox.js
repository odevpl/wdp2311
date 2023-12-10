import React from 'react';
import PropTypes from 'prop-types';
import RatingStars from '../../common/ProductBox/RatingStars';
import styles from './ProductsBrowser.module.scss';

function PriceRateBox({ product }) {
  const discount = 0.8;
  return (
    <div className={styles.ratingWrapper}>
      <div className={styles.priceTag}>
        <h5>
          $
          {(product.price * discount).toLocaleString('en-EN', {
            minimumFractionDigits: 2,
          })}
        </h5>
        <p>${product.price.toLocaleString('en-EN', { minimumFractionDigits: 2 })}</p>
      </div>
      <div className={styles.rateBox}>
        <h5>{product.name}</h5>
        <RatingStars stars={product.stars} />
      </div>
    </div>
  );
}

export default PriceRateBox;

PriceRateBox.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number,
    name: PropTypes.string,
    stars: PropTypes.number,
  }),
};
