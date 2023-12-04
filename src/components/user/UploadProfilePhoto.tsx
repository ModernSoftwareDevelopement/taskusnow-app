import {
  Box,
  Button,
  Heading,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  AspectRatio,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import { AddIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { ChangeEvent, useState } from 'react';
import useUpdateUserPhoto from '../../hooks/useUpdateUserPhoto.ts';

const UploadProfilePhoto = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [file, setFile] = useState({
    file: new File([], ''),
    url: '',
  });
  const updateUserPhoto = useUpdateUserPhoto();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const onSave = () => {
    const data = new FormData();
    data.append('image', file.file);

    updateUserPhoto.mutate(data);

    setFile({
      file: new File([], ''),
      url: '',
    });

    onClose();
  };

  return (
    <>
      <IconButton
        aria-label="Upload profile photo"
        icon={<AddIcon />}
        onClick={onOpen}
        height="100%"
        width="100%"
        position="absolute"
        top="0"
        left="0"
        opacity="0"
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit profile photo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AspectRatio width="100" ratio={1}>
              <Box
                borderColor="gray.300"
                borderStyle="dashed"
                borderWidth="2px"
                rounded="md"
                shadow="sm"
                role="group"
              >
                <Box position="relative" height="100%" width="100%">
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    height="100%"
                    width="100%"
                    display="flex"
                    flexDirection="column"
                  >
                    <Stack
                      height="100%"
                      width="100%"
                      display="flex"
                      alignItems="center"
                      justify="center"
                      spacing="4"
                    >
                      {!file.url && (
                        <Box position="relative">
                          <PlusSquareIcon boxSize={10} />
                        </Box>
                      )}

                      {file.url && (
                        <Image
                          src={file.url}
                          width={200}
                          height={200}
                          borderRadius="full"
                        />
                      )}
                      <Stack p="8" textAlign="center" spacing="1">
                        <Heading
                          fontSize="lg"
                          color="gray.700"
                          fontWeight="bold"
                        >
                          Drop images here
                        </Heading>
                        <Text fontWeight="light">or click to upload</Text>
                      </Stack>
                    </Stack>
                  </Box>
                  <Input
                    type="file"
                    height="100%"
                    width="100%"
                    position="absolute"
                    top="0"
                    left="0"
                    opacity="0"
                    aria-hidden="true"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </Box>
              </Box>
            </AspectRatio>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onSave}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UploadProfilePhoto;
