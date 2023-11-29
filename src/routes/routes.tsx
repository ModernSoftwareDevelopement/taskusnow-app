import { createBrowserRouter } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes.tsx';
import LoginPage from '../pages/applications/Authentications/LoginPage.tsx';
import PublicRoutes from './PublicRoutes.tsx';
import Dashboard from '../pages/dashboards/Dashboard.tsx';
import Home from '../pages/home/Home.tsx';
import UserProfilePage from '../pages/applications/Users/UserProfilePage.tsx';
import Tasks from '../pages/applications/Tasks/components/Tasks.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicRoutes />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'about',
        element: <div>About</div>,
      },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'profile',
        element: <UserProfilePage />,
      },
      {
        path: 'tasks',
        element: <Tasks />,
      },
    ],
  },
]);

export default router;
