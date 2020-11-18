import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <Link to="/user">Go to USER</Link>
    </Layout>
  );
};

export default Home;
