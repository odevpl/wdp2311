import React, { useState } from 'react';
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

const PromotionalProduct = ({ name, price, stars, finishPromoDate }) => {
  let countTime;

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  const countPromoTime = () => {
    const dateNow = new Date();
    const dateOfFinishPromo = new Date(finishPromoDate);
    const timeBetween = dateOfFinishPromo - dateNow;

    setSeconds(
      Math.floor((timeBetween / 1000) % 60)
        .toString()
        .padStart(2, '0')
    );
    setMinutes(
      Math.floor((timeBetween / (1000 * 60)) % 60)
        .toString()
        .padStart(2, '0')
    );
    setHours(
      Math.floor((timeBetween / (1000 * 60 * 60)) % 24)
        .toString()
        .padStart(2, '0')
    );
    setDays(Math.floor(timeBetween / (1000 * 60 * 60 * 24)));
  };

  clearInterval(countTime);
  countTime = setInterval(countPromoTime, 1000);

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
          <div className={styles.amount}>
            <span>{days}</span> days
          </div>
          <div className={styles.amount}>
            <span>{hours}</span> hrs
          </div>
          <div className={styles.amount}>
            <span>{minutes}</span> mins
          </div>
          <div className={styles.amount}>
            <span>{seconds}</span> secs
          </div>
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
  finishPromoDate: PropTypes.string,
};

export default PromotionalProduct;
