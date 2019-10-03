import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const CoinCard = ({
  CoinInfo: { Internal, FullName, ImageUrl },
  Display: {
    USD: { CHANGEPCT24HOUR, CHANGEPCTHOUR, PRICE }
  }
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <Image
          style={styles.image}
          source={{ uri: `https://www.cryptocompare.com${ImageUrl}` }}
        />
        <Text style={styles.coinSymbol}>{Internal}</Text>
        <Text style={styles.separator}>|</Text>
        <Text style={styles.coinName}>{FullName}</Text>
        <Text style={styles.coinPrice}>{PRICE}</Text>
      </View>

      <View style={styles.statisticsContainer}>
        <Text>
          24H:
          <Text>{CHANGEPCT24HOUR} %</Text>
        </Text>
        <Text>
          HOUR:
          <Text>{CHANGEPCTHOUR} %</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3,
    padding: 20
  },
  upperRow: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 15
  },
  coinSymbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: "bold"
  },
  separator: {
    marginTop: 10
  },
  coinName: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20
  },
  coinPrice: {
    marginTop: 10,
    marginLeft: "auto",
    marginRight: 10,
    fontWeight: "bold"
  },
  statisticsContainer: {
    flex: 1,
    flexDirection: "row",
    borderTopColor: "#FAFAFA",
    borderTopWidth: 2,
    padding: 10,
    justifyContent: "space-around"
  },
  image: {
    width: 35,
    height: 35
  }
});

export default CoinCard;
