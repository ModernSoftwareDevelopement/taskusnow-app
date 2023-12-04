import {
  Avatar,
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import useUser from '../../hooks/useUser.ts';
import useUserStore from '../../stores/useAuthUserStore.ts';
import SkillTag from './SkillTag.tsx';
import AddSkill from './AddSkill.tsx';
import UploadProfilePhoto from './UploadProfilePhoto.tsx';

const ProfileCard = () => {
  const authUserId = useUserStore((state) => state.userId);
  const { data, isLoading, isError } = useUser(authUserId!);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
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
          src={data.imageUrl ?? 'https://bit.ly/broken-link'}
        >
          <UploadProfilePhoto />
        </Avatar>
        <Heading>{data.fullName}</Heading>
        <Text>@liucuxiu</Text>
        <Text>Software Engineer</Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Wrap spacing={2} justify={'center'}>
            {data.skills?.map((skill: string) => (
              <WrapItem key={skill}>
                <SkillTag tag={skill} />
              </WrapItem>
            ))}
            <AddSkill skills={data.skills || []} />
          </Wrap>
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
            }}
          >
            Follow
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default ProfileCard;
