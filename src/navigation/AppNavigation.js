import * as React from "react";
import { Container, Text } from "native-base";
import { Image, StyleSheet } from "react-native";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { MainScreen } from "../screens/MainScreen";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <Container>
      <Image
        style={styles.avatar}
        source={{
          uri:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamYpU-toEkxiPMa5f4Eqx-pYFB59YCpvwug&usqp=CAU",
        }}
      />
      <Text style={styles.nameUser}>Test User</Text>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </Container>
  );
}

export default function AppNavigation() {
  return (
    <Container>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='Home'
          drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen
            name='Home'
            component={MainScreen}
            options={{ drawerLabel: "Главная" }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  avatar: {
    marginTop: 5,
    width: 60,
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  nameUser: {
    textAlign: "center",
    justifyContent: "center",
  },
});
