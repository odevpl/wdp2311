import styles from './CardPage.module.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { proceedToCheckout } from '../../../redux/cartRedux';
import { getAll, getCount, getFee } from '../../../redux/cartRedux';

const CardPage = () => {
  const dispatch = useDispatch();
  const allCartProduct = useSelector(state => getAll(state));
  const isCartEmpty = useSelector(state => getCount(state)) === 0;
  const proceedHandleClick = () => {
    dispatch(proceedToCheckout());
  };
  const subtotalPriceAmount = useSelector(state =>
    getAll(state)
      .map(product => product.totalPrice)
      .reduce((a, b) => a + b, 0)
  );
  const deliveryFee = useSelector(state => getFee(state));
  const totalPriceAmount = subtotalPriceAmount + deliveryFee;
  return (
    <Container>
      <div className={styles.cart}>
        <div className={styles.shoppingCart}>
          <div className={styles.itemTitle}>
            <div className={styles.title}>
              <span></span>
            </div>
            <div className={styles.title}>
              <span></span>
            </div>
            <div className={styles.titleProduct}>
              <span>PRODUCT</span>
            </div>
            <div className={styles.title}>PRICE</div>
            <div className={styles.title}>QUANTITY</div>
            <div className={styles.title}>TOTAL</div>
          </div>
          {allCartProduct.map(item => (
            <CartItem key={item.id} {...item} />
          ))}

          <div className={styles.title}>
            <div>
              <input type='text' name='name' value='' placeholder='Coupon code' />
              <button>APPLY COUPON</button>
            </div>
            <div>
              <button>UPDATE CART</button>
            </div>
          </div>
        </div>
        <div className={styles.subTable}>
          <div className={styles.subTitle}>
            <h6>Cart Totals</h6>
          </div>
          <div className={styles.subItem}>
            <div className={styles.subBorder}>
              <div className={styles.description}>
                <span>Subtotal</span>
              </div>
            </div>
            <div className={styles.price}>${subtotalPriceAmount}</div>
          </div>
          <div className={styles.subItem}>
            <div className={styles.subBorder}>
              <div className={styles.description}>
                <span>Total</span>
              </div>
            </div>
            <div className={styles.price}>${isCartEmpty ? 0 : totalPriceAmount}</div>
          </div>
          <NavLink to='/'>
            <button onClick={proceedHandleClick}> PROCEED TO CHECKOUT</button>
          </NavLink>
        </div>
      </div>
    </Container>
  );
};

export default CardPage;
