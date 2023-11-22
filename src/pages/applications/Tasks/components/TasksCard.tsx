import { Card, CardBody, Heading, Avatar, Text } from "@chakra-ui/react";
import { TaskInterface } from "../../../../entities/Task";

interface Props {
  Task: TaskInterface;
  OnClick: (task: TaskInterface) => void;
}

const TasksCard = ({ Task, OnClick }: Props) => {
  return (
    <Card
      borderRadius={10}
      width={400}
      margin={0}
      padding={0}
      onClick={() => OnClick(Task)}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="mb-3">
              <CardBody>
                <Heading size="md">{Task.title}</Heading>
                <Text className="mb-2">Location : Singapore</Text>
                <Text>Date : Flexible</Text>
              </CardBody>
            </div>
          </div>
          <div className="col-md-4">
            <CardBody
              display="flex"
              flexDirection="column"
              alignItems="flex-end"
            >
              <Text color="blue.600" fontSize="lg">
                $150
              </Text>
              <Avatar src="https://bit.ly/broken-link" size={"sm"} />
            </CardBody>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TasksCard;
