import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { connect } from "react-redux";
import { get } from "lodash";

import { fetchCoinData } from "../actions";
import { CoinCardList, Loading } from "./index";
import { getCrypto } from "../selectors";

//TODO infinite scroll

class CryptoContainer extends Component {
  componentDidMount() {
    this.props.fetchCoinData();
  }

  render() {
    const { isFetching, data } = this.props.crypto;
    const cryptoCoins = get(data, "Data");

    if (isFetching) {
      return (
        <View>
          <Loading isFetching={isFetching} />
        </View>
      );
    } else {
      return (
        <ScrollView>
          <CoinCardList data={cryptoCoins} />
        </ScrollView>
      );
    }
  }
}

const mapStateToProps = state => ({
  crypto: getCrypto(state)
});

const mapDispatchToProps = {
  fetchCoinData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CryptoContainer);
