import React from 'react';
import { Link } from 'react-router-dom';
import { pathName } from 'api/api';

// import './layout.less';

const Layout = ({ children }) => {

  return (
    <div className="layout">
      <div className="layout__header">
        <Link to={`${pathName}/search`} className="link--light">Search</Link>
        <Link to={`${pathName}/about`} className="link--light">About</Link>
      </div>
      <div className="layout__content">
        {children}
      </div>
      <div className="layout__footer">
        <a href="https://github.com/Kociasta" alt="github kociasta" className="link--light">Made by Kociasta</a>
      </div>
    </div>
  );
};

export default Layout;
