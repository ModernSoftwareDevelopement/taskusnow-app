import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import UnAuthNavBar from './UnAuthNavBar.tsx';

const UnAuthLayout = () => {
  return (
    <>
      <UnAuthNavBar />
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default UnAuthLayout;
