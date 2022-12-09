import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from '@constants/routes';
import ProtectedRoute from '@router/ProtectedRoute';

const Router = () => {
  return (
    <Routes>
      {routes.map(route =>
        !route.protected ? (
          <Route path={route.path} key={route.id} element={route.element} />
        ) : (
          <Route
            path={route.path}
            key={route.id}
            element={<ProtectedRoute>{route.element}</ProtectedRoute>}
          />
        ),
      )}
    </Routes>
  );
};

export default Router;
