import RegisterPage from '@feature/RegisterPage/RegisterPage';
import HomePage from '@feature/HomePage/HomePage';
import LoginPage from '@feature/LoginPage/LoginPage';
import ProfilePage from '@feature/ProfilePage/ProfilePage';
import CreateLotPage from '@feature/CreateLotPage/CreateLotPage';

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
  {
    id: 4,
    path: '/profile',
    element: <ProfilePage />,
    protected: true,
  },
  {
    id: 5,
    path: '/lot/create',
    element: <CreateLotPage />,
    protected: true,
  },
];

export default routes;
