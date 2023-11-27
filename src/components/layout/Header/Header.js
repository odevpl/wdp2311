import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import styles from './Header.module.scss';

import TopBar from '../TopBar/TopBar';
import CompanyClaim from '../CompanyClaim/CompanyClaim';
import MenuBar from '../MenuBar/MenuBar';

const Header = props => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleSetActiveLink = link => {
    setActiveLink(link);
  };
  return (
    <header className={styles.root}>
      <TopBar />
      <CompanyClaim setActiveLink={handleSetActiveLink} />
      <MenuBar activeLink={activeLink} setActiveLink={handleSetActiveLink} />
    </header>
  );
};

// Header.propTypes = {};

export default Header;
