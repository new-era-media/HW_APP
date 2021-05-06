import React from "react";
import { HeaderApp } from "../components/header";
import { Button, Container, Text } from "native-base";
import { AUTH_SEND_CODE } from "../api";

import * as SecureStore from "expo-secure-store";

const phone = 9999999999;

const restApi = () => {
  AUTH_SEND_CODE(phone).then((res) => {
    console.log(res);
  });
};

const setStore = async () => {
  await SecureStore.setItemAsync("user-token", 'НАШЕ ЗНАЧЕНИЕ');
};
const getStore = async () => {
  let result = await SecureStore.getItemAsync("user-token");
  if (result) {
    console.log("🔐 Here's your value 🔐 \n" + result);
  } else {
    console.log("No values stored under that key.");
  }
};

export const MainScreen = ({ navigation }) => (
  <Container>
    <HeaderApp navigation={navigation} title='Главная страница' />
    <Button onPress={restApi}>
      <Text>Запрос на сервер</Text>
    </Button>
    <Button onPress={setStore}>
      <Text>Сохранение в SecureStore</Text>
    </Button>
    <Button onPress={getStore}>
      <Text>Получение из SecureStore</Text>
    </Button>
    <Text>Main Page</Text>
  </Container>
);
