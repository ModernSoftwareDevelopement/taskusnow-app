import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@chakra-ui/react';
import User from '../entities/User.ts';
import profileService from '../services/profileService.ts';
import useUserStore from '../stores/useUserStore.ts';


const useUpdateUserInfo = () => {
  const queryClient = useQueryClient();
  const accessToken = useUserStore((state) => state.accessToken);
  const toast = useToast();

  return useMutation(
    (newUserProfile) => profileService.post(newUserProfile, accessToken),
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
