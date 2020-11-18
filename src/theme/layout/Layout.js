import React from 'react';
import { Link } from 'react-router-dom';

// import './layout.less';

const Layout = ({ children }) => {

  return (
    <div className="container">
      <Link to="/">
        <div className="logo">
          <span>LOGO</span>
        </div>
      </Link>
      {children}
      <br />
      <br />
      <br />
      <p className="footer">
        Made with love
      </p>
    </div>
  );
};

export default Layout;
