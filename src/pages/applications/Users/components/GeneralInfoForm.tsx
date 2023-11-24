import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
} from '@chakra-ui/react';

const GeneralInfoForm = () => {
  return (
    <>
      <Center paddingY={1}>
        <Box
          maxW={'900px'}
          w={'full'}
          boxShadow={'2xl'}
          bg={'white'}
          rounded={'lg'}
          p={6}
        >
          <form>
            <Stack spacing={5}>
              <Heading fontSize={'2xl'}>General Information</Heading>

              <Stack spacing={4}>
                <HStack>
                  <FormControl id="fullName" isRequired>
                    <FormLabel>Full name</FormLabel>
                    <Input placeholder="Full name" type="text" />
                  </FormControl>
                  <FormControl id="gender">
                    <FormLabel>Gender</FormLabel>
                    <Input placeholder="Gender" type="text" />
                  </FormControl>
                </HStack>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="Email" type="text" />
                </FormControl>
              </Stack>

              <Heading fontSize={'2xl'}>Address</Heading>

              <Stack spacing={4}>
                <HStack>
                  <FormControl id="address" isRequired>
                    <FormLabel>Address</FormLabel>
                    <Input placeholder="Enter your home address" type="text" />
                  </FormControl>
                  <FormControl id="number">
                    <FormLabel>Number</FormLabel>
                    <Input placeholder="No." type="text" />
                  </FormControl>
                </HStack>
                <HStack>
                  <FormControl>
                    <FormLabel>City</FormLabel>
                    <Input placeholder="City" type="text" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>ZIP</FormLabel>
                    <Input placeholder="ZIP" type="text" />
                  </FormControl>
                </HStack>
              </Stack>

              <Button colorScheme="teal">Save All</Button>
            </Stack>
          </form>
        </Box>
      </Center>
    </>
  );
};

export default GeneralInfoForm;
