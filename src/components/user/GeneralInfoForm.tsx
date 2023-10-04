import { Box, Button, Center, FormControl, FormLabel, Heading, HStack, Input, Stack, Text } from '@chakra-ui/react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';

const schema = z.object({
  fullName: z.string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50, { message: 'Name is too long' }),
  gender: z.string().min(2).max(50),
  email: z.string().email(),
  address: z.string().min(2).max(50),
  number: z.string().min(2).max(50),
  city: z.string().min(2).max(50),
  zip: z.string().min(2).max(50),
});

type FormData = z.infer<typeof schema>;

const GeneralInfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  console.log(errors)
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      <Center>
        <Box
          maxW={'900px'}
          w={'full'}
          boxShadow={'2xl'}
          bg={'white'}
          rounded={'lg'}
          p={6}>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={5}>
              <Heading fontSize={'2xl'}>
                General Information
              </Heading>

              <Stack spacing={4}>
                <HStack>
                  <FormControl id="fullName" isRequired>
                    <FormLabel>Full name</FormLabel>
                    <Input
                      {...register('fullName')}
                      placeholder="Full name"
                      type="text"/>
                   <Text color='red'>{errors.fullName ? errors.fullName.message: null}</Text>
                  </FormControl>
                  <FormControl id="gender">
                    <FormLabel>Gender</FormLabel>
                    <Input placeholder="Gender" type="text"/>
                  </FormControl>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input {...register('email')}
                          placeholder="Email"
                         type="text"/>
                  <Text color='red'>{errors.email ? errors.email.message: null}</Text>
                </FormControl>
              </Stack>


              <Heading fontSize={'2xl'}>
                Address
              </Heading>

              <Stack spacing={4}>
                <HStack>
                  <FormControl id="address" isRequired>
                    <FormLabel>Address</FormLabel>
                    <Input placeholder="Enter your home address" type="text"/>
                  </FormControl>
                  <FormControl id="number">
                    <FormLabel>Number</FormLabel>
                    <Input placeholder="No." type="text"/>
                  </FormControl>
                </HStack>
                <HStack>
                  <FormControl>
                    <FormLabel>City</FormLabel>
                    <Input placeholder="City" type="text"/>
                  </FormControl>
                  <FormControl>
                    <FormLabel>ZIP</FormLabel>
                    <Input placeholder="ZIP" type="text"/>
                  </FormControl>
                </HStack>

              </Stack>


              <Button colorScheme="teal" type="submit">Save All</Button>

            </Stack>

          </form>

        </Box>
      </Center>

    </>
  );
};

export default GeneralInfoForm;
