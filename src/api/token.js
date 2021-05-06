import * as SecureStore from "expo-secure-store";

const LS_TOKEN_NAME = "user-token";

export const setToken = async (value) => {
  await SecureStore.setItemAsync(LS_TOKEN_NAME, value.toString());
};

export const getToken = async () => {
  return await SecureStore.getItemAsync(LS_TOKEN_NAME);
};

export const removeToken = async () => {
  await SecureStore.deleteItemAsync(LS_TOKEN_NAME);
};
