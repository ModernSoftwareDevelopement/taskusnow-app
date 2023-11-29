import { create } from 'zustand';

interface UseAuthUserStore {
  userId?: string;
  accessToken?: string;
  setUserId: (id: string) => void;
  setAccessToken: (accessToken: string) => void;
}

const useAuthUserStore = create<UseAuthUserStore>((set) => ({
  userId: undefined,
  accessToken: undefined,
  setUserId: (userId: string) => set({ userId }),
  setAccessToken: (accessToken: string) => set({ accessToken }),
}));

export default useAuthUserStore;
