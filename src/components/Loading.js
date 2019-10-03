import React from "react";
import { View, StyleSheet } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

const Loading = ({ isFetching }) => {
  return (
    <View style={styles.container}>
      <Spinner
        visible={isFetching}
        animation="fade"
        textStyle={styles.spinnerTextStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  spinnerTextStyle: {
    color: "#253145"
  }
});

export default Loading;
