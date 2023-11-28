import {
  IconButton,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalOverlay,
  useDisclosure,
  FormControl,
  Input,
  Wrap,
  WrapItem,
  ModalFooter,
  Button,
  Tag,
  TagLabel,
  TagCloseButton,
  Stack,
  FormHelperText,
  FormErrorMessage
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import React, { ChangeEvent, useState } from 'react';
import useUpdateUserInfo from '../../hooks/useUpdateUserInfo.ts';

interface Props {
  skills: string[];
}

const AddSkill = ({ skills }: Props) => {
  const MAX_SKILLS = 5;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newSkills, setNewSkills] = useState<string[]>(skills);
  const [inputValue, setInputValue] = useState('');
  const updateUserProfile = useUpdateUserInfo();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      if (newSkills.find((skill) => skill.toLowerCase() === inputValue.toLowerCase())) {
        return;
      }
      setNewSkills([...newSkills, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setNewSkills(newSkills.filter((skill) => skill !== skillToRemove));
  };

  const onSave = () => {
    setInputValue('');
    updateUserProfile.mutate({ skills: newSkills });
    setNewSkills(newSkills);
    onClose();
  };

  const onOpenForm = () => {
    onOpen();
    setInputValue('');
    setNewSkills(skills);
  };

  return (
    <>
      <IconButton
        colorScheme="blue"
        aria-label="Add skills"
        size={'xs'}
        icon={<AddIcon/>}
        onClick={onOpenForm}/>

      <Modal
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>
            Add Skills
          </ModalHeader>
          <ModalBody>
            <FormControl>
              <Stack spacing={3}>
                <Input
                  maxLength={10}
                  placeholder="Type a skill and press Enter"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleInputKeyDown}
                />
                <FormErrorMessage>
                  {newSkills.length > MAX_SKILLS && `Maximum ${MAX_SKILLS} skills.`}
                </FormErrorMessage>
                <FormHelperText>Maximum {MAX_SKILLS} skills.</FormHelperText>

                <Wrap spacing={2}>
                  {newSkills.map((skill) => (
                    <WrapItem key={skill}>
                      <Tag
                        borderRadius="full"
                        px="2"
                        colorScheme="teal"
                        variant="outline"
                        mr={2}
                      >
                        <TagLabel>{skill}</TagLabel>
                        <TagCloseButton onClick={() => removeSkill(skill)}/>
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>
              </Stack>

            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}
                    isDisabled={newSkills.length > MAX_SKILLS}
                    onClick={onSave}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>


      </Modal>

    </>);

};

export default AddSkill;
