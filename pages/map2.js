/* eslint-disable jsx-a11y/anchor-is-valid */
import '../src/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import Layout from '../components/MyLayout'
import MainMapLayout from '../components/map_layout'


function Map2 () {
  return (
    <Layout>
      <MainMapLayout layout="left"/>
    </Layout>
  );
}

export default Map2