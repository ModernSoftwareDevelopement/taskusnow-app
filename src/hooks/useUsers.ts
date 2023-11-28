import { useQuery } from '@tanstack/react-query';
import userService from '../services/userService.ts';

const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: userService.getAll,
  });
};

export default useUsers;
