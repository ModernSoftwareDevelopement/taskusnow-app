import { Button } from '@chakra-ui/react';
import useAuth from '../../hooks/useAuth.ts';

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <>
      <Button onClick={() => logout()}>Logout</Button>
    </>
  );
};

export default LogoutButton;
