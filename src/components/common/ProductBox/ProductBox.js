import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import StarsRating from '../../features/StarsRating/StarsRating';
import { addProductToCompare } from '../../../redux/compareRedux';
import { useDispatch } from 'react-redux';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  isFavorite,
  isCompare,
  id,
  ownRating,
  oldPrice,
}) => {
  const buttonFavoriteActive = clsx('outline', {
    [styles.favorite]: isFavorite,
  });
  const buttonCompareActive = clsx('outline', {
    [styles.favorite]: isCompare,
  });
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const product = { name };

  const addToCompare = () => {
    dispatch(addProductToCompare(product));
  };
  return (
    <div>
      <div
        className={styles.root}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.photo}>
          {promo && <div className={styles.sale}>{promo}</div>}
          <div
            className={styles.buttons}
            style={isHovered === true ? { opacity: 1 } : { opacity: 0 }}
          >
            <Button variant='small'>Quick View</Button>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
        </div>
        <div className={styles.content}>
          <h5>{name}</h5>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map(i => (
              <a key={i} href='#'>
                {i <= stars ? (
                  <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                )}
              </a>
            ))}

            <StarsRating stars={stars} id={id} ownRating={ownRating} />
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.actions}>
          <div className={styles.outlines}>
            <Button variant='outline' className={buttonFavoriteActive}>
              <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
            </Button>
            <Button
              variant='outline'
              onClick={addToCompare}
              className={buttonCompareActive}
            >
              <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
            </Button>
          </div>
          <div className={styles.price}>
            {oldPrice ? <span className={styles.oldPrice}>${oldPrice}</span> : ''}
            <Button noHover variant='small'>
              $ {price}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  oldPrice: PropTypes.number,
  isFavorite: PropTypes.bool,
  isCompare: PropTypes.bool,
  id: PropTypes.string,
  ownRating: PropTypes.number,
};

export default ProductBox;
