const LS_TOKEN_NAME = "user-token";

export const setToken = async () => {
  await SecureStore.setItemAsync(LS_TOKEN_NAME, "НАШЕ ЗНАЧЕНИЕ");
};

export const getToken = async () => {
  return await SecureStore.getItemAsync(LS_TOKEN_NAME);
};

export const removeToken = async () => {
  return await SecureStore.deleteItemAsync(LS_TOKEN_NAME);
};
