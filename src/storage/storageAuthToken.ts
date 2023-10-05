import AsyncStorage from "@react-native-async-storage/async-storage";

import { AUTH_STORAGE } from "@storage/storageConfig";

type StorageAuthTokenProps = {
  token: string;
  refresh_token: string;
};

export async function storageAuthTokenSave({
  token,
  refresh_token,
}: StorageAuthTokenProps) {
  await AsyncStorage.setItem(
    AUTH_STORAGE,
    JSON.stringify({ token, refresh_token })
  );
  console.log("dados do token atualizados no storage: ", refresh_token);
}

export async function storageAuthTokenGet() {
  const response = await AsyncStorage.getItem(AUTH_STORAGE);
  console.log("dados do token armazenados no storage: ", response);

  const { token, refresh_token }: StorageAuthTokenProps = response
    ? JSON.parse(response)
    : {};

  return { token, refresh_token };
}

export async function storageAuthTokenRemove() {
  await AsyncStorage.removeItem(AUTH_STORAGE);
  console.log("dados do token removidos do storage");
}
