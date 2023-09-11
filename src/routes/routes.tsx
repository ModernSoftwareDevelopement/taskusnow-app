import { createBrowserRouter } from 'react-router-dom';
import UserProfile from '../pages/applications/Users/UserProfile.tsx';
import Layout from '../layout/Layout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: 'profile', element: <UserProfile/>
      },
      {
        path: 'tasks', element: <div>Tasks</div>
      },
      {
        path: 'about', element: <div>About</div>
      }
    ]
  },
])

export default router;
