import React from "react";
import { Header, Left, Body, Right, Icon, Title, Button } from "native-base";

export const HeaderApp = ({ navigation, title }) => {
  return (
    <Header>
      {navigation.dangerouslyGetParent() ? (
        <Left>
          <Button transparent>
            <Icon
              name='arrow-back'
              onPress={() => console.log(navigation.dangerouslyGetParent())}
            />
          </Button>
        </Left>
      ) : null}

      <Body>
        <Title>{title}</Title>
      </Body>
      <Right>
        <Button
          transparent
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Icon name='menu' />
        </Button>
      </Right>
    </Header>
  );
};
