import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "@/constants";
const Setting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Setting</Text>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  text: {
    color: COLORS.white,
  },
});
