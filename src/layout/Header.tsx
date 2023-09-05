import { useAuth0 } from '@auth0/auth0-react';
import { User } from '../models/User.ts';
import LogoutButton from '../pages/applications/Authentications/LogoutButton.tsx';
import LoginButton from '../pages/applications/Authentications/LoginButton.tsx';
import { Box, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react';

const Header = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const userLogin: User = {
    id: 1,
    name: user?.name,
    email: user?.email,
    avatar: '',
    gender: ''
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">TaskUsNow App</Heading>
        </Box>
        <Spacer/>
        <HStack>
          {!isAuthenticated && <LoginButton/>}
          {isAuthenticated &&
            <HStack>
              <Text>{userLogin.email}</Text>
              <LogoutButton/>
            </HStack>
          }
        </HStack>
      </Flex>
    </>


  );
};

export default Header;
