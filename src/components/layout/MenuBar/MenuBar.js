import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col'>
          <ProductSearch />
        </div>
        <div className={'col-auto ' + styles.menu}>
          <ul>
            <li>
              <NavLink to={'/'} className={styles.noUnderline}>
                <p className={styles.active}>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/shop/furniture'} className={styles.noUnderline}>
                <p>Furniture</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/shop/chair'} className={styles.noUnderline}>
                <p>Chair</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/shop/table'} className={styles.noUnderline}>
                <p>Table</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/shop/sofa'} className={styles.noUnderline}>
                <p>Sofa</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/shop/bedroom'} className={styles.noUnderline}>
                <p>Bedroom</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/blog'} className={styles.noUnderline}>
                <p>Blog</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
