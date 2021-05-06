import React from "react";
import { HeaderApp } from "../components/header";
import { Button, Container, Text } from "native-base";
import { AUTH_SEND_CODE } from "../api";

const restApi = () => {
  AUTH_SEND_CODE(9197301071).then((res) => {
    console.log(res);
  });
};

export const MainScreen = ({ navigation }) => (
  <Container>
    <HeaderApp navigation={navigation} title='Главная страница' />
    <Button>
      <Text onPress={restApi}>Запрос на сервер</Text>
    </Button>
    <Text>Main Page</Text>
  </Container>
);
