import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addToFavorites, removeFromFavorites } from '../../../redux/productsRedux';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import initialState from '../../../redux/initialState';
import StarsRating from '../../features/StarsRating/StarsRating';
import { addProductToCompare } from '../../../redux/compareRedux';
import Popup from '../Popup/Popup';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  stars,
  category,
  isCompare,
  product,
  ownRating,
  oldPrice,
}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.products.favorites || {});
  //console.log('Favorites:', favorites);

  useEffect(() => {
    if (Object.keys(favorites).length === 0) {
      dispatch(addToFavorites({ id: initialState.products[0].id }));
    }
  }, [dispatch, favorites, id]);

  const isFavorite = favorites[id];

  /*const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites({ id }));
    } else {
      dispatch(addToFavorites({ id }));
    }
  };*/

  /*const buttonFavoriteActive = clsx('outline', {
    [styles.favorite]: isFavorite,
  });*/
  const buttonCompareActive = clsx('outline', {
    [styles.favorite]: isCompare,
  });
  const [isHovered, setIsHovered] = useState(false);

  const [modalShow, setModalShow] = useState(false);
  const [backgroundBlur, setBackgroundBlur] = useState(false);

  const addToCompare = () => {
    dispatch(addProductToCompare(product));
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
          <StarsRating stars={stars} id={id} ownRating={ownRating} />
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline' className={buttonCompareActive}>
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
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  oldPrice: PropTypes.number,
  isFavorite: PropTypes.bool,
  isCompare: PropTypes.bool,
  ownRating: PropTypes.number,
  category: PropTypes.string,
  product: PropTypes.string,
};

export default ProductBox;
