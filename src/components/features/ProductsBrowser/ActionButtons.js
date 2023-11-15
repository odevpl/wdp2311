import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '../../common/Tooltip/Tooltip';
import styles from './ProductsBrowser.module.scss';

function ActionButtons({ product }) {
  return (
    <div className={styles.actionsWrapper}>
      <Button variant={'outline'}>
        <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        <Tooltip placement={'right'}>Add to favorite</Tooltip>
      </Button>
      <Button variant={'outline'}>
        <FontAwesomeIcon icon={faExchangeAlt}>Compare</FontAwesomeIcon>
        <Tooltip placement={'right'}>Compare</Tooltip>
      </Button>
      <Button variant={'outline'}>
        <FontAwesomeIcon icon={faEye}>Show</FontAwesomeIcon>
        <Tooltip placement={'right'}>Show</Tooltip>
      </Button>
      <Button variant={'outline'}>
        <FontAwesomeIcon icon={faShoppingBasket}>To cart</FontAwesomeIcon>
        <Tooltip placement={'right'}>Add to cart</Tooltip>
      </Button>
    </div>
  );
}

export default ActionButtons;

ActionButtons.propTypes = {
  product: PropTypes.object,
};
