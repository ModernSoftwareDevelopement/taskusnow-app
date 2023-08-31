import { users } from '../data/users.ts';

const useUsers = () => ({ data: users, isLoading: false, error: null });

export default useUsers;

