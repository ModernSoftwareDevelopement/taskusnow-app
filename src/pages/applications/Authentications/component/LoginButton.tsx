import { Button } from '@chakra-ui/react';
import useAuth from '../../../../hooks/useAuth.ts';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth();
  
  return (
    <>
      <Button onClick={() => loginWithRedirect()}>Login</Button>
    </>
  );
};

export default LoginButton;
