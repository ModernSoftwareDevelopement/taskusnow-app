import useUsers from '../../../hooks/useUsers.ts';
import DataTable from '../../../components/DataTable.tsx';
import { Heading } from '@chakra-ui/react';

const UserList = () => {
  const { data, isLoading, error } = useUsers();

  const column = ['id', 'avatar', 'name', 'email'];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }
  return (
    <>
      <Heading>User List</Heading>
      <DataTable data={data} column={column}/>
    </>
  );
}

export default UserList;
