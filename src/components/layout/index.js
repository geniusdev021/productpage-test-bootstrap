import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Header from '../header';

const Layout = ({ children }) => (
  <Container fluid>
    <Header />
    <Container fluid="lg">
      {children}
    </Container>
  </Container>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
