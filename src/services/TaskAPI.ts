import axios, { AxiosResponse } from 'axios';
import { TaskData, TaskInterface } from '../entities/Task';

const instance = axios.create({
  baseURL: 'http://localhost:3000/', // Use environment variables for the URL
});

export const postTask = async (task: TaskInterface): Promise<TaskInterface> => {
  const response: AxiosResponse<TaskInterface> = await instance.post(
    '/api/task',
    task,
  );
  return response.data;
};

export const getTasks = async (): Promise<TaskData> => {
  const response: AxiosResponse<TaskData> = await instance.get('/api/tasks');
  return response.data;
};
