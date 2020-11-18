import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from './requests.js';

import Layout from '../../theme/layout/Layout';

const Repo = () => {
  return (
    <Layout>
      <h1>Repo Page</h1>
      <Link to="/user">Go to USER</Link>
    </Layout>
  );
};

export default Repo;