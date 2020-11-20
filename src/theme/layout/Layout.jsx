import React from 'react';
import { Link } from 'react-router-dom';
import { pathName } from 'api/api';

// import './layout.less';

const Layout = ({ children }) => {

  return (
    <div className="layout">
      <header className="layout__header">
        <Link to={`${pathName}/search`} className="link--light">Search</Link>
        <Link to={`${pathName}/about`} className="link--light">About</Link>
      </header>
      <main className="layout__content">
        {children}
      </main>
      <footer className="layout__footer">
        <a href="https://github.com/Kociasta" target="_blank" className="link--light">Made with <i className="fas fa-heart" /> and <i className="fab fa-github" /> by Kociasta</a>
      </footer>
    </div>
  );
};

export default Layout;
