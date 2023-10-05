import {
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
  Input, Tooltip,
  useEditableControls
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';


const EditableControls = () => {
  const { isEditing, getSubmitButtonProps, getCancelButtonProps } = useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent="end" size="sm" w="full" spacing={2} mt={2}>
      <IconButton icon={<CheckIcon/>}
                  {...getSubmitButtonProps()}
                  aria-label=""
      />
      <IconButton
        icon={<CloseIcon boxSize={3}/>}
        {...getCancelButtonProps()}
        aria-label=""
      />
    </ButtonGroup>
  ) : null;
};

interface Props {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onSubmit?: (value: string) => void;
  onChange?: (value: string) => void;
}

const EditableText = ({ placeholder, value, defaultValue, onSubmit, onChange }: Props) => {
  return (
    <Editable
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      isPreviewFocusable={true}
      selectAllOnFocus={false}
      onSubmit={onSubmit}
      onChange={onChange}
    >
      <Tooltip label="Click to edit" shouldWrapChildren={true}>
        <EditablePreview
          py={2}
          px={4}
          _hover={{
            background: 'gray.100'
          }}
        />
      </Tooltip>
      <Input py={2} px={4} as={EditableInput} />
      <EditableControls/>
    </Editable>
  );
};

export default EditableText;
