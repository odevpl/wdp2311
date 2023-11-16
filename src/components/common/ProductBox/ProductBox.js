import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import StarsRating from '../../features/StarsRating/StarsRating';
import { addProductToCompare } from '../../../redux/compareRedux';
import { useDispatch } from 'react-redux';
import Popup from '../Popup/Popup';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  isCompare,
  id,
  ownRating,
  oldPrice,
  category,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const buttonFavoriteActive = clsx('outline', {
    [styles.favorite]: isFavorite,
  });

  const buttonCompareActive = clsx('outline', {
    [styles.favorite]: isCompare,
  });
  const [isHovered, setIsHovered] = useState(false);

  const [modalShow, setModalShow] = useState(false);
  const [backgroundBlur, setBackgroundBlur] = useState(false);

  const dispatch = useDispatch();
  const product = { name, price };

  useEffect(() => {
    const favoriteFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favoriteFromStorage.includes(id));
  }, [id]);

  const addToFavorite = e => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    const update = isFavorite
      ? favoritesFromStorage.filter(favId => favId !== id)
      : [...favoritesFromStorage, id];
    localStorage.setItem('favorites', JSON.stringify(update));
  };

  const addToCompare = e => {
    e.preventDefault();
    dispatch(addProductToCompare(product));
  };
  const modalOn = e => {
    e.preventDefault();
    setModalShow(true);
    setBackgroundBlur(true);
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
        <img src={`images/${category}s/${name}.jpg`} alt={name} />
        {promo && <div className={styles.sale}>{promo}</div>}
        <div
          className={styles.buttons}
          style={isHovered === true ? { opacity: 1 } : { opacity: 0 }}
        >
          <Button variant='small' onClick={modalOn}>
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
          <StarsRating stars={stars} id={id} ownRating={ownRating} />
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            onClick={addToFavorite}
            variant='outline'
            className={buttonFavoriteActive}
          >
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
          <Button noHover variant='small' className={styles.priceBtn}>
            $ {price}
          </Button>
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
  category: PropTypes.string,
};

export default ProductBox;
