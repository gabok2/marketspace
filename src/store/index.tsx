import { create } from "zustand";
import {
  storageAuthTokenSave,
  storageAuthTokenGet,
  storageAuthTokenRemove,
} from "@storage/storageAuthToken";

import {
  storageUserGet,
  storageUserRemove,
  storageUserSave,
} from "@storage/storageUser";
import { api } from "@services/api";

type UserDTO = {
  id: string;
  avatar: string;
  name: string;
  email: string;
};

export type AuthContextDataProps = {
  user: UserDTO;
  singIn: (email: string, password: string) => Promise<void>;
  updateUserProfile: (userUpdated: UserDTO) => Promise<void>;
  signOut: () => Promise<void>;
  isLoadingUserStorageData: boolean;
  loadUserData: () => Promise<void>;
};

export const useAuthStore = create<AuthContextDataProps>((set) => ({
  user: {} as UserDTO,
  isLoadingUserStorageData: false,
  singIn: async (email: string, password: string) => {
    try {
      set({
        isLoadingUserStorageData: true,
      });
      const response = await api.post("/sessions", { email, password });
      const { token, user, refresh_token } = response.data;
      await storageUserSave(user);
      await storageAuthTokenSave({ token, refresh_token });
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      set({ user });
    } catch (error) {
      throw error;
    } finally {
      set({
        isLoadingUserStorageData: false,
      });
    }
  },
  signOut: async () => {
    try {
      set({
        isLoadingUserStorageData: true,
        user: {} as UserDTO,
      });
      await storageUserRemove();
      await storageAuthTokenRemove();
    } catch (error) {
      throw error;
    } finally {
      set({
        isLoadingUserStorageData: false,
      });
    }
  },

  updateUserProfile: async (userUpdated: UserDTO) => {
    try {
      set({
        user: userUpdated,
      });
      await storageUserSave(userUpdated);
    } catch (error) {
      throw error;
    }
  },

  loadUserData: async () => {
    try {
      set({
        isLoadingUserStorageData: true,
      });
      const userLogged = await storageUserGet();
      const { token } = await storageAuthTokenGet();

      if (token && userLogged) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        set({ user: userLogged });
      }
    } catch (error) {
      console.log("Erro ao carregar user:", error);
      throw error;
    } finally {
      set({
        isLoadingUserStorageData: false,
      });
    }
  },
}));
