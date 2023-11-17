import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Breadcrumbs = ({ category }) => {
  return (
    <div className={'pb-5'}>
      <NavLink to={'/'}>Home</NavLink>
      {category && <span> / </span>}
      {category && <NavLink to={`/shop/${category}`}>{category}</NavLink>}
      <Routes>
        <Route
          path={'/search/:category'}
          render={({ match }) => <span> / {match.params.category}</span>}
        />
      </Routes>
    </div>
  );
};

Breadcrumbs.propTypes = {
  category: PropTypes.string,
};
export default Breadcrumbs;
