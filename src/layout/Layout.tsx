import NavBar from './NavBar.tsx';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth.ts';
import useUserStore from '../stores/useAuthUserStore.ts';
import { useEffect } from 'react';

const Layout = () => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth();
  const setUserId = useUserStore((state) => state.setUserId);
  const setAccessToken = useUserStore((state) => state.setAccessToken);
  useEffect(() => {
    const handleAuthentication = async () => {
      if (isAuthenticated && user) {
        setUserId(user.my_api_user_id);
        try {
          const accessToken = await getAccessTokenSilently();
          setAccessToken(accessToken);
        }
        catch (error) {
          console.error('Error getting access token:', error);
        }
      }
    };
    handleAuthentication();
  }, [isAuthenticated, user, setUserId, setAccessToken]);

  return (
    <>
      <NavBar/>
      <Box padding={5}>
        <Outlet/>
      </Box>
    </>
  );
};

export default Layout;
