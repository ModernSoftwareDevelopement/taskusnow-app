import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@chakra-ui/react';
import User from '../entities/User.ts';
import profileService from '../services/profileService.ts';
import useUserStore from '../stores/useAuthUserStore.ts';

const useUpdateUserInfo = () => {
  const queryClient = useQueryClient();
  const accessToken = useUserStore((state) => state.accessToken);
  const userId = useUserStore((state) => state.userId);
  const toast = useToast();

  return useMutation(
    (newUserProfile) => profileService.post(newUserProfile, accessToken),
    {
      onMutate: async (newUserProfile: User) => {
        await queryClient.cancelQueries({ queryKey: ['user', userId] });

        const previousUser = queryClient.getQueryData(['user', userId]);

        queryClient.setQueryData(['user', userId], {
          id: userId,
          ...(typeof previousUser === 'object' ? previousUser : {}),
          ...newUserProfile,
        });

        return { previousUser, newUserProfile };
      },
      onSuccess: () => {
        toast({
          title: 'Profile updated.',
          position: 'top-right',
          status: 'success',
          isClosable: true,
        });
      },
      onError: (err, user, context) => {
        toast({
          position: 'top-right',
          title: `Error updating profile ${user.id}`,
          description: `${err}. 'Please try again later.`,
          status: 'error',
          isClosable: true,
        });

        if (!context) return;
        queryClient.setQueryData(['user', userId], context.previousUser);
      },
    },
  );
};

export default useUpdateUserInfo;
