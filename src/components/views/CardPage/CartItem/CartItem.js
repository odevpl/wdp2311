import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './CartItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeProductFromCart } from '../../../../redux/cartRedux';
import { qtyChange } from '../../../../redux/cartRedux';

const CartItem = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();
  const [qtyValue, setQtyValue] = useState(qty);
  const [lastValidQtyValue, setLastValidQtyValue] = useState(qty);
  const removeFromCart = () => {
    dispatch(removeProductFromCart(id));
  };

  useEffect(() => {
    dispatch(qtyChange({ qty: qtyValue, id, totalPrice: qtyValue * price }));
  }, [dispatch, id, price, qtyValue]);

  const clickPlusHandler = () => {
    qtyValidation(qtyValue + 1);
  };
  const clickMinusHandler = () => {
    qtyValidation(qtyValue - 1);
  };

  const qtyValidation = inputValue => {
    const newValue = +inputValue;
    setQtyValue(+inputValue);

    if (!isNaN(newValue) && newValue >= 0 && newValue <= 10) {
      setLastValidQtyValue(newValue);
    } else {
      setQtyValue(lastValidQtyValue);
    }
  };

  return (
    <div className={styles.item}>
      <div className={styles.buttons} onClick={removeFromCart}>
        <FontAwesomeIcon className={styles.deleteBtn} icon={faTimesCircle} />
      </div>
      <div className={styles.image}>
        <img src={img} alt='' />
      </div>
      <div className={styles.description}>
        <span>{name}</span>
      </div>
      <div className={styles.price}>${price}</div>
      <div className={styles.quantity}>
        <button
          className={styles.minusBtn}
          onClick={clickMinusHandler}
          type='button'
          name='button'
        >
          <FontAwesomeIcon className={styles.icon} icon={faMinus} />
        </button>
        <input
          type='text'
          name='name'
          onChange={e => qtyValidation(e.target.value)}
          value={qtyValue !== lastValidQtyValue ? lastValidQtyValue : qtyValue}
        />
        <button
          className={styles.plusBtn}
          onClick={clickPlusHandler}
          type='button'
          name='button'
        >
          <FontAwesomeIcon className={styles.icon} icon={faPlus} />
        </button>
      </div>
      <div className={styles.totalPrice}>${price * qtyValue}</div>
    </div>
  );
};

CartItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
  qty: PropTypes.number,
};
export default CartItem;
