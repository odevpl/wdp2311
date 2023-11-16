import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './TopBar.module.scss';
import Login from '../../common/Login/Login';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const TopBar = () => {
  const [loginIsOpen, setLoginIsOpen] = useState(false);

  const loginOpen = () => {
    setLoginIsOpen(!loginIsOpen);
  };
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col text-left ${styles.topOptions}`}>
            <ul>
              <li>
                <a href='#'>
                  USD <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
              <li>
                <a href='#'>
                  English <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
              <li>
                <a href='#'>
                  Help <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
            </ul>
          </div>
          <div className={`col text-right ${styles.topMenu}`}>
            <ul>
              <li>
                <button onClick={loginOpen} className={styles.btn}>
                  <FontAwesomeIcon className={styles.icon} icon={faUser} /> Login
                </button>
              </li>
              <li>
                <Link to='/register' className={styles.register}>
                  <FontAwesomeIcon className={styles.icon} icon={faLock} />
                </Link>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faBars} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {loginIsOpen && <Login setIsOpenLogin={setLoginIsOpen} loginOpen={loginOpen} />}
    </div>
  );
};

// TopBar.propTypes = {};

export default TopBar;
