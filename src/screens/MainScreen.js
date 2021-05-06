import React from "react";
import { HeaderApp } from "../components/header";
import { Container, Text } from "native-base";

export const MainScreen = ({ navigation }) => (
  <Container>
    <HeaderApp navigation={navigation} title='Главная страница' />
    <Text>Main Page</Text>
  </Container>
);
