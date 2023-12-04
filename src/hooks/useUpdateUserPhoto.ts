import { useMutation, useQueryClient } from '@tanstack/react-query';
import useUserStore from '../stores/useAuthUserStore.ts';
import { useToast } from '@chakra-ui/react';
import userPhotoService from '../services/userPhotoService.ts';

const useUpdateUserPhoto = () => {
  const queryClient = useQueryClient();
  const accessToken = useUserStore((state) => state.accessToken);
  const userId = useUserStore((state) => state.userId);
  const toast = useToast();

  return useMutation(
    (file: FormData) => userPhotoService.post(file, accessToken),
    {
      onMutate: async () => {
        await queryClient.cancelQueries({ queryKey: ['user', userId] });
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['user'] });

        toast({
          title: 'Profile Photo updated.',
          position: 'top-right',
          status: 'success',
          isClosable: true,
        });
      },
      onError: (err, context) => {
        toast({
          position: 'top-right',
          title: `Error updating profile photo ${userId}`,
          description: `${err}. 'Please try again later.`,
          status: 'error',
          isClosable: true,
        });

        if (!context) return;
      },
    },
  );
};

export default useUpdateUserPhoto;
