import ApiClient from './api-client.ts';
import { TaskData } from '../entities/Task.ts';

export default new ApiClient<TaskData>('/api/tasks');
