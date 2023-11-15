import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack, Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';
import useAuth from '../hooks/useAuth.ts';
import { useEffect } from 'react';
import useUserStore from '../stores/useUserStore.ts';
import userService from '../services/userService.ts';

interface Props {
  name: string;
  path: string;
}

const publicLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
];


const privateLinks = [
  {
    name: 'Home',
    path: '/dashboard',
  },
  {
    name: 'Tasks',
    path: '/tasks',
  },
];

const NavLink = ({ name, path }: Props) => {
  return (
    <Box
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
    >
      <Link to={path}>{name}</Link>
    </Box>
  );
};

const NavBar = () => {
  const { isAuthenticated, user, loginWithRedirect, logout, getAccessTokenSilently } = useAuth();
  const setUser = useUserStore((state) => state.setUser);
  const setAccessToken = useUserStore((state) => state.setAccessToken);
  useEffect(() => {
    const handleAuthentication = async () => {
      if (isAuthenticated && user) {
        const profile = await userService.get(user.my_api_user_id);
        setUser(profile);

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
  }, [isAuthenticated, user, setUser]);

  const Links = user ? privateLinks : publicLinks;

  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')}
           position="sticky" top={0} zIndex={1}
           px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image src={logo}/>
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.name} name={link.name} path={link.path}/>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              {user ?
                (<MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'md'}
                    />
                  </MenuButton>

                )
                :
                (<MenuButton
                  as={Button}
                  cursor={'pointer'}
                  onClick={() => loginWithRedirect()}
                >
                  Login
                </MenuButton>)
              }

              {user ? <MenuList>
                <MenuItem>
                  <Link to="/profile">Profile</Link>
                </MenuItem>
                <MenuDivider/>
                <MenuItem onClick={() => logout()}>
                  Logout
                </MenuItem>
              </MenuList> : null}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} name={link.name} path={link.path}/>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default NavBar;
