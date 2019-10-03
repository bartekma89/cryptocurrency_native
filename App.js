import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/store";

import { Header, CryptoContainer } from "./src/components";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}
