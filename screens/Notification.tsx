import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "@/constants";

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notification</Text>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  text: {
    color: COLORS.white,
  },
});
