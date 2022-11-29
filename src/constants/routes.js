import RegisterPage from '@feature/RegisterPage/RegisterPage';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    id: 1,
    path: '/register',
    element: <RegisterPage />,
  },
]);

export default routes;
