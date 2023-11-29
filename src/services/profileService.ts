import ApiClient from './api-client.ts';
import User from '../entities/User.ts';

export default new ApiClient<User>('/profile');
