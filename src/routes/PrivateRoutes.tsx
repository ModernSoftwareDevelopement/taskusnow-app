import useAuth from '../hooks/useAuth.ts';
import { Navigate } from 'react-router-dom';
import Layout from '../layout/Layout.tsx';

const PrivateRoutes = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Layout />;
};

export default PrivateRoutes;
