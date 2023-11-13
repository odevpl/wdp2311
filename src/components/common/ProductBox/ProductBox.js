import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../../redux/productsRedux';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import initialState from '../../../redux/initialState';
import Popup from '../Popup/Popup';
import clsx from 'clsx';
import { useState } from 'react';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  isCompare,
  id,
  ownRating,
  oldPrice,
}) => {
  /*const buttonFavoriteActive = clsx('outline', {
    [styles.favorite]: isFavorite,
  });*/
  /*const buttonCompareActive = clsx('outline', {
    [styles.favorite]: isCompare,
  });*/
  const [isHovered, setIsHovered] = useState(false);

  const [modalShow, setModalShow] = useState(false);
  const [backgroundBlur, setBackgroundBlur] = useState(false);

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.products.favorites || {});
  console.log('Favorites:', favorites);

  useEffect(() => {
    if (Object.keys(favorites).length === 0) {
      dispatch(addToFavorites({ id: initialState.products[0].id }));
    }
  }, [dispatch, favorites, id]);

  const isFavorite = favorites[id];

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites({ id }));
    } else {
      dispatch(addToFavorites({ id }));
    }
  };
  return (
    <div
      className={styles.root}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Popup
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          setBackgroundBlur(false);
        }}
        {...{
          backgroundBlur,
          name,
          price,
          promo,
          stars,
          id,
          ownRating,
        }}
      />
      <div className={styles.photo}>
        <img src={`images/beds/${name}.jpg`} alt={name} />
        {promo && <div className={styles.sale}>{promo}</div>}
        <div
          className={styles.buttons}
          style={isHovered === true ? { opacity: 1 } : { opacity: 0 }}
        >
          <Button
            variant='small'
            onClick={() => {
              setModalShow(true);
              setBackgroundBlur(true);
            }}
          >
            Quick View
          </Button>
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
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            onClick={handleToggleFavorite}
            className={isFavorite ? styles.favorite : ''}
          >
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

ProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  ownRating: PropTypes.number,
  oldPrice: PropTypes.number,
  isCompare: PropTypes.string,
};

export default ProductBox;
