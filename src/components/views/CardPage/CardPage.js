import styles from './CardPage.module.scss';
import React from 'react';
import { faMinus, faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import { useSelector } from 'react-redux';

const CardPage = () => {
  const allCartProduct = useSelector(state => state.cart);
  return (
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
          <CartItem
            key={item.key}
            id={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
          />
        ))}
        {/* <CartItem {...props} />
        <div className={styles.item}>
          <div className={styles.buttons}>
            <FontAwesomeIcon className={styles.deleteBtn} icon={faTimesCircle} />
          </div>
          <div className={styles.image}>
            <img src='images/beds/Aenean Ru Bristique 1.jpg' alt='' />
          </div>
          <div className={styles.description}>
            <span>Item 1</span>
          </div>
          <div className={styles.price}>$349</div>
          <div className={styles.quantity}>
            <button className={styles.plusBtn} type='button' name='button'>
              <FontAwesomeIcon className={styles.icon} icon={faMinus} />
            </button>
            <input type='text' name='name' value='1' />
            <button className={styles.faMinus} type='button' name='button'>
              <FontAwesomeIcon className={styles.icon} icon={faPlus} />
            </button>
          </div>
          <div className={styles.totalPrice}>$549</div>
        </div> */}

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
          <div className={styles.price}>$349</div>
        </div>
        <div className={styles.subItem}>
          <div className={styles.subBorder}>
            <div className={styles.description}>
              <span>Total</span>
            </div>
          </div>
          <div className={styles.price}>$349</div>
        </div>
        <NavLink to='/'>
          <button> PROCEED TO CHECKOUT</button>
        </NavLink>
      </div>
    </div>
  );
};

export default CardPage;
