import {
  Box, Button, Center, FormControl, FormLabel, Heading, Input, Stack, VStack,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import useUpdateUserInfo from '../../hooks/useUpdateUserInfo.ts';
import useUser from '../../hooks/useUser.ts';
import useAuthUserStore from '../../stores/useAuthUserStore.ts';

const GeneralInfoForm = () => {
  const authUserId = useAuthUserStore(state => state.userId);

  if (!authUserId) {
    return <div>Please login</div>;
  }

  const { data, isLoading, isError } = useUser(authUserId);
  const updateUserProfile = useUpdateUserInfo();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const initialValues = {
    fullName: data.fullName,
    email_2: data.email_2,
    phone: data.phone,
    address: data.address,
    address_2: data.address_2,
  };

  const onSubmit = async (values: any) => {
    const formData = Object.fromEntries(
      Object.entries(values).filter(([_, v]) => v !== undefined),
    );
    updateUserProfile.mutate(formData);
  };

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
          <Formik initialValues={initialValues}
                  onSubmit={onSubmit}
          >
            <Form>
              <Stack spacing={5}>
                <Heading as="h3" size="md">Basic Info</Heading>
                <VStack spacing={3}>
                  <FormControl>
                    <FormLabel htmlFor="fullName">Full Name</FormLabel>
                    <Field as={Input} name="fullName" placeholder="Full name"/>
                  </FormControl>
                </VStack>


                <Heading as="h3" size="md">Contact Info</Heading>
                <VStack spacing={3}>
                  <FormControl>
                    <FormLabel htmlFor="email_2">Email</FormLabel>
                    <Field as={Input}
                           name="email_2"
                           placeholder="Email"
                           type="email"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel htmlFor="phone">Phone</FormLabel>
                    <Field as={Input} name="phone" placeholder="Phone"/>
                  </FormControl>
                </VStack>

                <Heading as="h3" size="md">Addresses</Heading>
                <VStack spacing={3}>
                  <FormControl>
                    <FormLabel htmlFor="address">Home Address</FormLabel>
                    <Field as={Input} name="address" placeholder="Home Address"/>
                  </FormControl>

                  <FormControl>
                    <FormLabel htmlFor="city">Other Address</FormLabel>
                    <Field as={Input} name="address_2" placeholder="Other address"/>
                  </FormControl>
                </VStack>

                <Button type="submit" colorScheme="blue">Save</Button>
              </Stack>
            </Form>
          </Formik>
        </Box>
      </Center>
    </>
  );
};

export default GeneralInfoForm;
