import useUsers from '../../../hooks/useUsers.ts';
import DataTable, { Column } from '../../../components/DataTable.tsx';
import { Heading } from '@chakra-ui/react';
import { User } from '../../../models/User.ts';

const UserList = () => {
  const { data, isLoading, error } = useUsers();

  const columns: Column<User>[] = [
    {
      header: 'ID',
      accessor: (row) => row.id,
    },
    {
      header: 'Name',
      accessor: (row) => row.name,
    },
    {
      header: 'Avatar',
      accessor: (row) => row.avatar,
    },
    {
      header: 'Email',
      accessor: (row) => row.email,
    },
  ];


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }
  return (
    <>
      <Heading>User List</Heading>
      <DataTable<User> data={data} columns={columns}/>
    </>
  );
};

export default UserList;
