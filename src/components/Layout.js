import React from 'react';
import { Link } from 'react-router-dom';

import style from './layout.less';

const Layout = ({ children }) => {

  console.log(style)
  return (
    <div className={style.container}>
      <Link to="/">
        <div className={style.logo}>
          <span>LOGO</span>
        </div>
      </Link>
      {children}
      <br />
      <br />
      <br />
      <p className={style.footer}>
        Made with love
      </p>
    </div>
  );
};

export default Layout;
