import {
  Box, Button, Center, FormControl, FormLabel, Heading, Input, Stack, VStack,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import useUpdateUserInfo from '../../hooks/useUpdateUserInfo.ts';
import useUser from '../../hooks/useUser.ts';
import useAuthUserStore from '../../stores/useAuthUserStore.ts';

interface FormValue {
  fullName?: string;
  email_2?: string;
  phone?: string;
  address?: string;
  address_2?: string;
}

const validateSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Required')
    .test(
      'len',
      'Name must be at least 2 characters and not more than 50',
      (val) => {
        return ((val.length == 0 || (val.length >= 2 && val.length <= 50)));
      }
    ),
  email_2: Yup.string().email('Invalid email address').required('Required'),
  phone: Yup.string().test(
    'len',
    'Phone must bevalidation at least 10 characters',
    (val) => {
      if (val === undefined) return true;
      return ((val.length == 0 || (val.length >= 10)));
    }
  ),
  address: Yup.string().test(
    'len',
    'Address is too long',
    (val) => {
      if (val === undefined) return true;
      return ((val.length == 0 || (val.length <= 2000)));
    }
  ),
  address_2: Yup.string().test(
    'len',
    'Address is too long',
    (val) => {
      if (val === undefined) return true;
      return ((val.length == 0 || (val.length <= 2000)));
    }
  )
});

const GeneralInfoForm = () => {
  const authUserId = useAuthUserStore(state => state.userId);
  const { data, isLoading, isError } = useUser(authUserId!);
  const updateUserProfile = useUpdateUserInfo();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const initialValues: FormValue = {
    fullName: data.fullName,
    email_2: data.email_2,
    phone: data.phone,
    address: data.address,
    address_2: data.address_2,
  };


  const onSubmit = async (values: FormValue) => {
    const formData = Object.fromEntries(
      Object.entries(values).filter((v) => v !== undefined),
    );
    updateUserProfile.mutate(formData);
  };

  return (
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
                validationSchema={validateSchema}
        >
          {({ errors, touched }) => (

            <Form>
              <Stack spacing={5}>
                <Heading as="h3" size="md">Basic Info</Heading>
                <VStack spacing={3}>
                  <FormControl>
                    <FormLabel htmlFor="fullName">Full Name</FormLabel>
                    <Field as={Input} name="fullName" placeholder="Full name"/>
                    {errors.fullName && touched.fullName && <Box color="red">{errors.fullName}</Box>}
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
                    {errors.email_2 && touched.email_2 && <Box color="red">{errors.email_2}</Box>}
                  </FormControl>

                  <FormControl>
                    <FormLabel htmlFor="phone">Phone</FormLabel>
                    <Field as={Input} name="phone" placeholder="Phone"/>
                    {errors.phone && touched.phone && <Box color="red">{errors.phone}</Box>}
                  </FormControl>
                </VStack>

                <Heading as="h3" size="md">Addresses</Heading>
                <VStack spacing={3}>
                  <FormControl>
                    <FormLabel htmlFor="address">Home Address</FormLabel>
                    <Field as={Input} name="address" placeholder="Home Address"/>
                    {errors.address && touched.address && <Box color="red">{errors.address}</Box>}
                  </FormControl>

                  <FormControl>
                    <FormLabel htmlFor="city">Other Address</FormLabel>
                    <Field as={Input} name="address_2" placeholder="Other address"/>
                    {errors.address_2 && touched.address_2 && <Box color="red">{errors.address_2}</Box>}
                  </FormControl>
                </VStack>

                <Button type="submit" colorScheme="blue">Save</Button>
              </Stack>
            </Form>


          )}
        </Formik>
      </Box>
    </Center>
  );
};

export default GeneralInfoForm;
