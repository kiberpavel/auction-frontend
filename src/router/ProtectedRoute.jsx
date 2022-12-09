import React from 'react';
import usersSelectors from '@store/users/users-selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { element } from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const userStatus = useSelector(usersSelectors.getLogInStatus);

  return userStatus ? children : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  children: element.isRequired,
};

export default ProtectedRoute;
