import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../theme/layout/Layout';

const AppInfo = () => {
  return (
    <Layout>
      <h1>AppInfo Page</h1>
      <Link to="/user">Go to USER</Link>
    </Layout>
  );
};

export default AppInfo;
