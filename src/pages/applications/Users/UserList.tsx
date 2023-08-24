import useUsers from '../../../hooks/useUsers.ts';

const UserList = () => {

  const { data, isLoading, error } = useUsers();

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <>
      <h1>UserList</h1>
      <ul>
        {data.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default UserList;
