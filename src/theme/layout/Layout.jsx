import React from 'react';
import { Link } from 'react-router-dom';
import { pathName } from 'api/api';

// import './layout.less';

const Layout = ({ children }) => {

  return (
    <div className="layout">
      <div className="layout__header">
        <Link to={`${pathName}/search`} className="button--light">Search</Link>
        <Link to={`${pathName}/about`} className="button--light">About</Link>
      </div>
      <div className="layout__content">
        {children}
      </div>
      <div className="layout__footer">
        <Link to="https://github.com/Kociasta" className="button--light">Made by Kociasta</Link>
      </div>
    </div>
  );
};

export default Layout;
