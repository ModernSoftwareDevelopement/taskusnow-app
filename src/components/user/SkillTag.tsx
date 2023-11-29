import { Tag, TagLabel } from '@chakra-ui/react';

interface Props {
  tag: string;
}

const SkillTag = ({ tag }: Props) => {
  return (
    <Tag variant="outline" colorScheme="blue">
      <TagLabel>{tag}</TagLabel>
    </Tag>
  );
};

export default SkillTag;
