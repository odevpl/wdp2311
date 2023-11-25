import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { NavLink } from 'react-router-dom';

const MenuBar = ({ children, activeLink, setActiveLink }) => {
  const Links = () => {
    const hrefs = ['Home', 'Furniture', 'Chair', 'Table', 'Sofa', 'Bedroom', 'Blog'];
    return hrefs.map(href => (
      <li key={href}>
        <NavLink
          to={href === 'Home' ? `/` : href === 'Blog' ? `/blog` : `/shop/${href}`}
          className={href === activeLink ? styles.active : ''}
          onClick={() => setActiveLink(href)}
        >
          <p>{href}</p>
        </NavLink>
      </li>
    ));
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col order-last order-xl-first'>
            <ProductSearch />
          </div>
          <div className={'col-auto ' + styles.menu}>
            <ul className='d-none d-lg-flex'>
              <Links />
            </ul>

            <div className='dropdown navbar-light d-flex align-items-center h-100 d-lg-none'>
              <button
                className='navbar-toggler'
                type='button'
                id='dropdownMenuButton'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                <ul className={styles.dropdown + ' flex-column align-items-stretch'}>
                  <Links />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
  activeLink: PropTypes.string,
  setActiveLink: PropTypes.func,
};

export default MenuBar;
