import React from "react";
import { View } from "react-native";
import { isEmpty, map } from "lodash";

import { CoinCard } from "./index";

//TODO Dodac wyswietlanie bledow, jak tylko akcja zostanie poprawiona

const CoinCardList = ({ data }) => {
  return (
    <View>
      {!isEmpty(data) &&
        map(data, ({ CoinInfo, DISPLAY }) => (
          <CoinCard key={CoinInfo.Id} CoinInfo={CoinInfo} Display={DISPLAY} />
        ))}
    </View>
  );
};

export default CoinCardList;
