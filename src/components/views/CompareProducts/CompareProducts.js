import React from 'react';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/compareRedux';
import styles from './CompareProducts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeProductToCompare } from '../../../redux/compareRedux';
import Button from '../../common/Button/Button';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

const CompareProducts = () => {
  const productNames = useSelector(getAll);
  const dispatch = useDispatch();

  const handleCardClick = productId => {
    const isIdInProducts = productNames.some(product => product.id === productId);

    if (isIdInProducts) {
      dispatch(removeProductToCompare(productId));
    }
  };

  return (
    <div className={styles.container}>
      {productNames.map(product => (
        <div
          key={product.id}
          className={styles.product}
          onClick={() => handleCardClick(product.id)}
        >
          <div className={styles.imageContainer}>
            <img
              className={styles.imgCompare}
              src={`images/beds/${product.name}.jpg`}
              alt={product.name}
            />
            <FontAwesomeIcon icon={faTimes} className={styles.closeIcon} />
          </div>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default CompareProducts;
