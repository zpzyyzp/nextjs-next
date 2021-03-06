/* eslint-disable jsx-a11y/anchor-is-valid */
import '../src/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Layout from '../components/MyLayout'
import MainMapLayout from '../components/map_layout'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
}));

function Map () {
  return (
    <Layout>
      <MainMapLayout layout="left"/>
    </Layout>
  );
}

export default Map