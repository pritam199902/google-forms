import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import style from "./styleSheet/welcomeStyle";

import WelcomeScreen from "./screen/welcomeScreen";
import Home from "./screen/home";

export default function App() {
  const { landscape } = useDeviceOrientation();
  // console.log(landscape);

  return (
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
