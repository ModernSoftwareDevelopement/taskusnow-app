import useUsers from '../../../hooks/useUsers';
import { Spinner } from '@chakra-ui/react';

// example to use react-query
const UserList = () => {
  const { data, isLoading, error } = useUsers();

  if (isLoading) return <Spinner/>;

  if (error) throw error;

  if (!data) return null;

  return (
    <>
      <h1>User List</h1>

      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default UserList