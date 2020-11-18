import React from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api';

import Layout from './Layout';

const Home = () => {

  api.get("/repos/Kociasta/Sit_On_Chair");

  return (
    <Layout>
      <h1>Home Page</h1>
      <Link to="/user">Go to USER</Link>
    </Layout>
  );
};

export default Home;
