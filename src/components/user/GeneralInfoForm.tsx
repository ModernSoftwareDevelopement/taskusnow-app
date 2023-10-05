import {
  Box,
  Center,
  Divider,
  Heading, Select,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import EditableText from '../EditableText.tsx';
import { useState } from 'react';


const GeneralInfoForm = () => {
  const [name, setName] = useState('');
  const onSubmit = (name: string) => {
    console.log(name);
    console.log('hihihi');
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

          <Stack spacing={5}>
            <Heading as="h3" size="md">Basic Info</Heading>
            <VStack align="stretch">
              <Text fontSize="sm">Full name</Text>

              <EditableText
                placeholder="Full name"
                value={name}
                onChange={(name) => setName(name)}
                onSubmit={(name) => onSubmit(name)}/>
            </VStack>
            <VStack align="stretch">
              <Text fontSize="sm">Birthday</Text>

              <EditableText
                placeholder="Select your birthday"
                value={name}
                onChange={(name) => setName(name)}
                onSubmit={(name) => onSubmit(name)}/>
            </VStack>

            <VStack align="stretch">
              <Text fontSize="sm">Gender</Text>
              <Box maxW="200px">
                <Select placeholder="Select option">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
            </VStack>

            <Divider/>

            <Heading as="h3" size="md">Contact Info</Heading>
            <VStack align="stretch">
              <Text fontSize="sm">Email</Text>

              <EditableText
                placeholder="Enter your email"
                value={name}
                onChange={(name) => setName(name)}
                onSubmit={(name) => onSubmit(name)}/>
            </VStack>
            <VStack align="stretch">
              <Text fontSize="sm">Phone</Text>
              <EditableText
                placeholder="Enter your phone number"
                value={name}
                onChange={(name) => setName(name)}
                onSubmit={(name) => onSubmit(name)}/>
            </VStack>

            <Divider/>

            <Heading as="h3" size="md">Addresses</Heading>
            <VStack align="stretch">
              <Text fontSize="sm">Home</Text>
              <EditableText
                placeholder="Enter your home address"
                value={name}
                onChange={(name) => setName(name)}
                onSubmit={(name) => onSubmit(name)}/>
            </VStack>

            <VStack align="stretch">
              <Text fontSize="sm">Other addresses</Text>
              <EditableText
                placeholder="None"
                value={name}
                onChange={(name) => setName(name)}
                onSubmit={(name) => onSubmit(name)}/>
            </VStack>
          </Stack>
        </Box>
      </Center>

    </>
  );
};

export default GeneralInfoForm;
