import { Card, CardBody, Heading, Avatar, Text } from '@chakra-ui/react';
import { TaskInterface } from '../../../../entities/Task';

interface Props {
  Task: TaskInterface | undefined;
}

const TaskDetailCard = ({ Task }: Props) => {
  if (!Task) {
    return null;
  }

  return (
    <Card borderRadius={10} width={500} margin={0} padding={0}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <CardBody>
                <Heading className="mb-2" size="md">
                  {Task.title}
                </Heading>
                <Avatar
                  className="mb-4"
                  src="https://bit.ly/broken-link"
                  size={'xs'}
                />{' '}
                Posted by
                <Text className="mb-2">Location : Singapore</Text>
                <Text className="mb-2">Date : Flexible</Text>
                <Text className="mb-2" fontWeight={'bold'}>
                  Details
                </Text>
                <Text className="mb-2">{Task.description}</Text>
              </CardBody>
            </div>
          </div>
          <div className="col-md-6">
            <CardBody display="flex" flexDirection="column" alignItems="center">
              <div className="d-flex justify-content-center mb-2">
                <Text className="mr-2" fontWeight={'bold'}>
                  Budget
                </Text>
              </div>
              <div className="d-flex justify-content-center">
                <Text color="blue.600" fontSize="lg">
                  $150
                </Text>
              </div>
              <button className="btn btn-primary" type="submit">
                Make an offer
              </button>
            </CardBody>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TaskDetailCard;
