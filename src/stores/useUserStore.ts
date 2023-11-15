import { create } from 'zustand';
import User from '../entities/User.ts';

interface UseUserStore {
  user: User | null;
  accessToken?: string;
  setUser: (user: any) => void;
  setAccessToken: (accessToken: string) => void;
}

const useUserStore = create<UseUserStore>((set) => ({
  user: null,
  accessToken: undefined,
  setUser: (user) => set({ user }),
  setAccessToken: (accessToken: string) => set({ accessToken }),
}));


export default useUserStore;
