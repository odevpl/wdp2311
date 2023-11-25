import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CompanyClaim.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { getCount } from '../../../redux/cartRedux';
import PropTypes from 'prop-types';

const CompanyClaim = ({ setActiveLink }) => {
  const number = useSelector(getCount);
  const isValidNumber = number >= 0 && number <= 99999;

  return (
    <div className={styles.root}>
      <div className='container'>
        {/* FOR DESKTOP */}

        <div className={`row align-items-center ${styles.desktop}`}>
          <div className={`col text-left ${styles.phoneNumber}`}>
            <p className='align-items-center'>
              <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560
              - 222
            </p>
          </div>
          <div className={`col text-center ${styles.logoBazar}`}>
            <Link to='/' onClick={() => setActiveLink('Home')}>
              <img src='/images/logo.png' alt='Bazar' />
            </Link>
          </div>
          <div className={`col text-right ${styles.cart}`}>
            <Link to='/cart' className={styles.cartBox}>
              <div className={styles.cartIcon}>
                <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
              </div>
              <div className={styles.cartCounter}>
                {isValidNumber && <div>{number}</div>}
              </div>
            </Link>
          </div>
        </div>

        {/* FOR MOBILE */}

        <div className={`row align-items-center ${styles.mobile}`}>
          <div className={`col text-center ${styles.logoBazar}`}>
            <Link to='/' onClick={() => setActiveLink('Home')}>
              <img src='/images/logo.png' alt='Bazar' />
            </Link>
          </div>
          <div className={`col mt-3`}>
            <div className={`col text-center ${styles.cart}`}>
              <Link to='/cart' className={styles.cartBox}>
                <div className={styles.cartIcon}>
                  <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
                </div>
                <div className={styles.cartCounter}>
                  {isValidNumber && <div>{number}</div>}
                </div>
              </Link>
            </div>
            <div className={`col text-center ${styles.phoneNumber}`}>
              <p className='align-items-center'>
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

CompanyClaim.propTypes = {
  setActiveLink: PropTypes.func,
};
export default CompanyClaim;
