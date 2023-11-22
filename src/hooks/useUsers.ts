import ApiClient from '../services/api-client';
import { useQuery } from '@tanstack/react-query';
import User from '../entities/User';

const apiClient = new ApiClient<User>('/users');

const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: apiClient.getAll,
  })
}

export default useUsers;

