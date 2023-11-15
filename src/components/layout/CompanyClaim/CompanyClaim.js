import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styles from './CompanyClaim.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const CompanyClaim = () => {
  const number = 0;
  const isValidNumber = number >= 0 && number <= 99999;

  return (
    <div className={styles.root}>
      <div className='container'>
        {/* FOR DESKTOP */}

        <div className={`row align-items-center ${styles.desktop}`}>
          <div className={`col text-left ${styles.phoneNumber}`}>
            <p>
              <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560
              - 222
            </p>
          </div>
          <div className={`col text-center ${styles.logoBazar}`}>
            <a href='#'>
              <img src='/images/logo.png' alt='Bazar' />
            </a>
          </div>
          <div className={`col text-right ${styles.cart}`}>
            <a href='#' className={styles.cartBox}>
              <div className={styles.cartIcon}>
                <NavLink to='/cart'>
                  <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
                </NavLink>
              </div>
              <div className={styles.cartCounter}>
                {isValidNumber && <div>{number}</div>}
              </div>
            </a>
          </div>
        </div>

        {/* FOR MOBILE */}

        <div className={`row align-items-center ${styles.mobile}`}>
          <div className={`col text-center ${styles.logoBazar}`}>
            <a href='#'>
              <img src='/images/logo.png' alt='Bazar' />
            </a>
          </div>
          <div className={`col mt-3`}>
            <div className={`col text-center ${styles.cart}`}>
              <a href='#' className={styles.cartBox}>
                <div className={styles.cartIcon}>
                  <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
                </div>
                <div className={styles.cartCounter}>0</div>
              </a>
            </div>
            <div className={`col text-center ${styles.phoneNumber}`}>
              <p>
                <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 -
                3560 - 222
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// CompanyClaim.propTypes = {};

export default CompanyClaim;
