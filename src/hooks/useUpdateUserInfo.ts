import { useMutation, useQueryClient } from '@tanstack/react-query';
import User from '../entities/User.ts';
import profileService from '../services/profileService.ts';
import { useToast } from '@chakra-ui/react';


const useUpdateUserInfo = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation(
    ({ accessToken, ...newUserProfile }) => profileService.post(newUserProfile, accessToken),
    {
      onMutate: async (newUserProfile: User) => {
        await queryClient.cancelQueries({ queryKey: ['user', newUserProfile.id] });

        const previousUsers = queryClient.getQueryData(['user', newUserProfile.id]);

        queryClient.setQueryData(['user', newUserProfile.id], newUserProfile);

        return { previousUsers, newUserProfile };
      },
      onSuccess: () => {
        toast({
          title: 'Profile updated.',
          position: 'top-right',
          status: 'success',
          isClosable: true,
        });
      },
      onError: (err, newUserProfile, context) => {
        console.log(err);
        toast({
          position: 'top-right',
          title: 'Error updating profile.',
          description: 'Please try again later.',
          status: 'error',
          isClosable: true,
        });

        if (!context) return;
        queryClient.setQueryData(['user', newUserProfile.id], context.previousUsers);
      }
    }
  );
};

export default useUpdateUserInfo;
