import { Box, Center, Text, VStack } from '@chakra-ui/react';
import EditableText from '../EditableText.tsx';
import { useState } from 'react';



const GeneralInfoForm = () => {
  const [name, setName ] = useState('min');
  const onSubmit = (name: string) => {
    console.log(name);
    console.log("hihihi");
  }
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

          <VStack align='stretch'>
            <Text>Full name</Text>

            <EditableText
              placeholder='Full name'
              value={name}
              onChange={(name) => setName(name)}
              onSubmit={(name) => onSubmit(name)}/>
          </VStack>

          <VStack align='stretch'>
            <Text>Gender</Text>

            <EditableText
              placeholder='Full name'
              value={name}
              onChange={(name) => setName(name)}
              onSubmit={(name) => onSubmit(name)}/>
          </VStack>


          <VStack align='stretch'>
            <Text>Email</Text>

            <EditableText
              placeholder='Full name'
              value={name}
              onChange={(name) => setName(name)}
              onSubmit={(name) => onSubmit(name)}/>
          </VStack>
        </Box>
      </Center>

    </>
  );
};

export default GeneralInfoForm;
