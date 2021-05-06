import React from "react";
import AppNavigation from "./src/navigation/AppNavigation";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";

import { loadFonts } from "./src/helpers/loadFonts";
import store from "./src/store";

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={loadFonts}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
