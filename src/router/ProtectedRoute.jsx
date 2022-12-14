import React from 'react';
import usersSelectors from '@store/users/users-selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { element } from 'prop-types';
import Header from '@common/Header';
import Footer from '@common/Footer';

const ProtectedRoute = ({ children }) => {
  const userStatus = useSelector(usersSelectors.getLogInStatus);

  return userStatus ? (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

ProtectedRoute.propTypes = {
  children: element.isRequired,
};

export default ProtectedRoute;
