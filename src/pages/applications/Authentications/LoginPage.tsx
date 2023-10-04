import LoginButton from '../../../components/user/LoginButton.tsx';
import useAuth from '../../../hooks/useAuth.ts';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <Navigate to="/dashboard"/>;
  }

  return (
    <div>
      <h1>LoginPage</h1>
      <LoginButton/>
    </div>
  )
}

export default LoginPage
