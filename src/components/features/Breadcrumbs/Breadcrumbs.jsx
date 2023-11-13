import React from 'react';
import {Link, Route, Switch} from "react-router-dom";

const Breadcrumbs = ({category}) => {
  return (
    <div className={'pb-5'}>
      <Link to={'/'}>Home</Link>
      {category && <span> / </span>}
      {category && <Link to={`/shop/${category}`}>{category}</Link>}
      <Switch>
        <Route path={"/search/:category"} render={({match}) => (
          <span> / {match.params.category}</span>
        )}/>
      </Switch>
    </div>
  );
};

export default Breadcrumbs;
