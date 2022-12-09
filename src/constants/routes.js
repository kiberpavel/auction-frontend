import RegisterPage from '@feature/RegisterPage/RegisterPage';
import HomePage from '@feature/HomePage/HomePage';
import LoginPage from '@feature/LoginPage/LoginPage';

const routes = [
  {
    id: 1,
    path: '/',
    element: <HomePage />,
    protected: true,
  },
  {
    id: 2,
    path: '/register',
    element: <RegisterPage />,
    protected: false,
  },
  {
    id: 3,
    path: '/login',
    element: <LoginPage />,
    protected: false,
  },
];

export default routes;
