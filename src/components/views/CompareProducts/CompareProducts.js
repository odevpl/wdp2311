import React from 'react';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/compareRedux';
import styles from './CompareProducts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { removeProductToCompare } from '../../../redux/compareRedux';
import Button from '../../common/Button/Button';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

const CompareProducts = () => {
  const productNames = useSelector(getAll);
  const dispatch = useDispatch();

  const handleCardClick = productName => {
    const isIdInProducts = productNames.some(product => product.name === productName);

    if (isIdInProducts) {
      dispatch(removeProductToCompare(productName));
    }
  };

  return (
    <div className={styles.container}>
      {productNames.map(product => (
        <div
          key={product.id}
          className={styles.product}
          onClick={() => handleCardClick(product.name)}
        >
          <div className={styles.imageContainer}>
            <img
              className={styles.imgCompare}
              src={`images/beds/${product.name}.jpg`}
              alt={product.name}
            />
            <FontAwesomeIcon icon={faTimes} className={styles.closeIcon} />
          </div>
          <div className={styles.content}>
            <h5>{product.name}</h5>
          </div>
          <div className={styles.line}></div>
          <div className={styles.actions}>
            <div className={styles.outlines}>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
              </Button>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
              </Button>
            </div>
            <div className={styles.price}>
              <Button noHover variant='small' className={styles.priceBtn}>
                $ {product.price}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompareProducts;
