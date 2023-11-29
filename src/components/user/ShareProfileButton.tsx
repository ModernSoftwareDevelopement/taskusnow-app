import {
  Box,
  Button,
  Center,
  IconButton,
  Input,
  InputGroup,
  Stack,
  useClipboard,
  useToast,
} from '@chakra-ui/react';
import { CheckIcon, CopyIcon } from '@chakra-ui/icons';

const ShareProfileButton = () => {
  const { hasCopied, onCopy } = useClipboard('');
  const toast = useToast();

  const handleCopy = () => {
    toast({
      title: 'Copied!',
    });
    onCopy();
  };
  return (
    <Center paddingY={1}>
      <Box
        maxW={'400px'}
        w={'full'}
        boxShadow={'2xl'}
        bg={'white'}
        rounded={'lg'}
        p={6}
      >
        <Stack>
          <Button>View Public Profile</Button>
          <InputGroup>
            <Input
              value="https://www.facebook.com/liucuxiu"
              mr={2}
              readOnly={true}
            />
            <IconButton
              aria-label="Copy"
              onClick={handleCopy}
              icon={hasCopied ? <CheckIcon /> : <CopyIcon />}
            />
          </InputGroup>
        </Stack>
      </Box>
    </Center>
  );
};

export default ShareProfileButton;
