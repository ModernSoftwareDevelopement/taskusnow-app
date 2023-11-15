import { useQuery } from '@tanstack/react-query';
import userService from '../services/userService.ts';

const useUser = (userId: string | number) => {
  return useQuery({
    queryKey: ['users', userId],
    queryFn: () => userService.get(userId),
  });
};

export default useUser;
