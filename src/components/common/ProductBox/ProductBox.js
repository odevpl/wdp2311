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
import { NavLink } from 'react-router-dom';
import { addProductToCart } from '../../../redux/cartRedux';
import uniqid from 'uniqid';
import initialState from '../../../redux/initialState';

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
  category,
}) => {

  const categoryInfo = initialState.categories.find(cat => cat.id === category);

  const imagePath = `/images/${categoryInfo.folder}/${name}.jpg`;

  const [isFav, setIsFav] = useState(false);
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
    setIsFav(favoriteFromStorage.includes(id));
  }, [id]);

  const addToFavorite = e => {
    e.preventDefault();
    setIsFav(!isFav);
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    const update = isFav
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
    e.stopPropagation();
    setModalShow(true);
    setBackgroundBlur(true);
  };

  const addToCart = (e, name, price) => {
    e.stopPropagation();
    e.preventDefault();

    const cartProductData = {
      id: uniqid(),
      name,
      price,
      qty: 1,
      img: `images/${category}/${name}.jpg`,
    };

    dispatch(addProductToCart(cartProductData));
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

      <NavLink to={`/product/${name}`} className='text-decoration-none'>
        <div className={styles.photo}>
          <img src={imagePath} alt={name} className='img-fluid' />
          {promo && <div className={styles.sale}>{promo}</div>}
          <div
            className={styles.buttons}
            style={isHovered === true ? { opacity: 1 } : { opacity: 0 }}
          >
            <Button variant='small' onClick={modalOn}>
              Quick View
            </Button>
            <Button variant='small' onClick={e => addToCart(e, name, price)}>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
        </div>
      </NavLink>
      <div className={styles.content}>
        <NavLink to={`/product/${name}`} className='text-decoration-none'>
          <h5>{name}</h5>
        </NavLink>
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
  categories: PropTypes.string,
};

export default ProductBox;
