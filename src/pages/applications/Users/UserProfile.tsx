import ProfileCard from './components/ProfileCard.tsx';
import { Grid, GridItem } from '@chakra-ui/react';
import GeneralInfoForm from './components/GeneralInfoForm.tsx';
import ShareProfileButton from './components/ShareProfileButton.tsx';

const UserProfile = () => {
  return (
    <>
      <Grid
        h="700px"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} paddingLeft={20} paddingY={10}>
          <ProfileCard />
        </GridItem>
        <GridItem rowSpan={3} colSpan={2} paddingX={5} paddingY={10}>
          <GeneralInfoForm />
        </GridItem>

        <GridItem rowSpan={1} colSpan={1} paddingLeft={20}>
          <ShareProfileButton />
        </GridItem>
      </Grid>
    </>
  );
};

export default UserProfile;
