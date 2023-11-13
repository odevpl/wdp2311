import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromotionalProduct.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';

const PromotionalProduct = ({ name, price, stars }) => {
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img src={`images/beds/${name}.jpg`} alt={name} />
        <div className={styles.button}>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
        <div className={'text-white ' + styles.counter}>
          <div className={styles.amount}>25 days</div>
          <div className={styles.amount}> 10 hrs</div>
          <div className={styles.amount}> 45 mins</div>
          <div className={styles.amount}> 30 secs</div>
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
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faEye}>Add to compare</FontAwesomeIcon>
          </Button>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};
PromotionalProduct.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  stars: PropTypes.number,
};

export default PromotionalProduct;
