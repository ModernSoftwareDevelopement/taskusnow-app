import { Badge } from '@chakra-ui/react';

interface Props {
  tag: string;
}

const SkillTag = ({ tag }: Props) => {
  return (
    <Badge px={2}
           py={1}
           fontWeight={'400'}>
      #{tag}
    </Badge>
  );
};

export default SkillTag;
