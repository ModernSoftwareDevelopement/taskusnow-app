import axios, { AxiosResponse } from 'axios';
import { TaskInterface } from '../models/Task';

const instance = axios.create({
  baseURL: 'http://localhost:4000/', // Use environment variables for the URL 
});

export const postTask = async (task: TaskInterface): Promise<TaskInterface> => {
  try {
    const response: AxiosResponse<TaskInterface> = await instance.post('/api/task', task);
    return response.data;
  } catch (error) {
    throw error;
  }
};
