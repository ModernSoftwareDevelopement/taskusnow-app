import { Avatar, Box, Button, Center, Heading, Stack, Text } from '@chakra-ui/react';
import SkillTag from '../SkillTag.tsx';

const ProfileCard = () => {
  return (
    <>
      <Center>
        <Box
          maxW="400px"
          w="full"
          boxShadow="2xl"
          rounded="lg"
          p={6}
          textAlign="center"
          bg="white"
        >
          <Avatar
            size={'xl'}
            mb={4}
            src={
              'https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/357710445_3125878341053480_5214693532527175189_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=iE8L6K5WrnYAX-qMo_V&_nc_ht=scontent.fhan14-4.fna&oh=00_AfB3xV_I-Y768tWK6PKCK8gnFaEtR2n7jbQNzd0RUHS4fg&oe=65085F39'}
          />
          <Heading>
            Liucuxiu
          </Heading>
          <Text>
            @liucuxiu
          </Text>
          <Text>
            Software Engineer
          </Text>

          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <SkillTag tag="React"/>
            <SkillTag tag="TypeScript"/>
          </Stack>

          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}
            >
              Message
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Follow
            </Button>
          </Stack>

        </Box>


      </Center>
    </>
  );
};

export default ProfileCard;
