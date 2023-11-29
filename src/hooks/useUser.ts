import { useQuery } from '@tanstack/react-query';
import userService from '../services/userService.ts';

const useUser = (userId: string) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => userService.get(userId),
    enabled: !!userId,
  });
};

export default useUser;
