import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';

const Profile = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState('');
  useEffect(() => {
    const getAccessToken = async () => {
      const accessToken = await getAccessTokenSilently();
      console.log(accessToken);
      setAccessToken(accessToken);
    };
    getAccessToken();
  }, []);

  return (
    <>
      <div>Profile</div>
      <div>{accessToken}</div>
    </>
  );
};

export default Profile;
