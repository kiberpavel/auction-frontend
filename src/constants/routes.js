import RegisterPage from '@feature/RegisterPage/RegisterPage';
import LoginPage from '@feature/LoginPage/LoginPage';
import ProfilePage from '@feature/ProfilePage/ProfilePage';
import CreateLotPage from '@feature/CreateLotPage/CreateLotPage';
import LotListPage from '@feature/LotListPage/LotListPage';
import EditLotPage from '@feature/EditLotPage/EditLotPage';
import LotPage from '@feature/LotPage/LotPage';

const routes = [
  {
    id: 1,
    path: '/',
    element: <LotListPage />,
    protected: false,
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
  {
    id: 6,
    path: '/lot/list',
    element: <LotListPage />,
    protected: true,
  },
  {
    id: 7,
    path: '/lot/update',
    element: <EditLotPage />,
    protected: true,
  },
  {
    id: 8,
    path: '/lot/current',
    element: <LotPage />,
    protected: false,
  },
];

export default routes;
