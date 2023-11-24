import NavBar from './NavBar.tsx';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
