import {
  Dimensions,
  Platform,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { COLORS } from "@/constants/theme";
import { StatusBar } from "expo-status-bar";
const { height } = Dimensions.get("window");

type ScreenWrapperProps = {
  style?: ViewStyle;
  children: React.ReactNode;
};

const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  let paddingTop = Platform.OS == "ios" ? height * 0.06 : height * 0.06;
  return (
    <View
      style={[
        {
          paddingTop,
          flex: 1,
          backgroundColor: COLORS.black,
        },
        style,
      ]}
    >
      <StatusBar style="light" backgroundColor={COLORS.black} />
      {children}
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
