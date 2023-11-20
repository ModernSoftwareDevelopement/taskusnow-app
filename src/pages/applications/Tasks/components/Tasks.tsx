import { useEffect, useState } from "react";
import { getTasks } from "../../../../services/TaskAPI";
import { TaskInterface, TaskData } from "../../../../models/Task";
import { SimpleGrid, Text } from "@chakra-ui/react";
import TasksCard from "./TasksCard";
import TaskDetailCard from "./TaskDetailCard";
import TaskCategories from "./TaskCategories";

async function fetchAllTasks() {
  const tasks = await getTasks();
  return tasks;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  const [task, setTask] = useState<TaskInterface | undefined>();
  const [error, setError] = useState("");

  async function handleSelectedTask(task: TaskInterface) {
    console.log("Task clicked", task);
    setTask(task);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response: TaskData = await fetchAllTasks();

        if (response.tasks) {
          setTasks(response.tasks);
        } else {
          console.error("Invalid response format:", response);
        }
      } catch (error) {
        const typedError = error as Error;
        setError(typedError.message);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <div className="mb-3">
                <TaskCategories
                  OnSelectCategory={(category) => console.log(category)}
                />
              </div>

              {error && <Text>{error}</Text>}
              <SimpleGrid columns={1} spacing={3}>
                {tasks.map((task) => (
                  <TasksCard
                    key={task.taskId}
                    Task={task}
                    OnClick={handleSelectedTask}
                  ></TasksCard>
                ))}
              </SimpleGrid>
            </div>
          </div>
          <div className="col-md-6">
            <TaskDetailCard Task={task}></TaskDetailCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
