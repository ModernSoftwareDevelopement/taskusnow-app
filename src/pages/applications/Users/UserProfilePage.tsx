import { Grid, GridItem } from '@chakra-ui/react';
import ProfileCard from '../../../components/user/ProfileCard.tsx';
import ShareProfileButton from '../../../components/user/ShareProfileButton.tsx';
import GeneralInfoForm from '../../../components/user/GeneralInfoForm2.tsx';

const UserProfilePage = () => {
  return (
    <Grid
      templateAreas={`"profile share" "general general"`}
      templateColumns="repeat(6, 1fr)"
      gap={1}
    >
      <GridItem colSpan={2}>

        <ProfileCard/>

        <ShareProfileButton/>

      </GridItem>

      <GridItem colSpan={4}>
        <GeneralInfoForm/>
      </GridItem>

    </Grid>
  );
};

export default UserProfilePage;
