import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "@/constants";
const Search = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  text: {
    color: COLORS.white,
  },
});
