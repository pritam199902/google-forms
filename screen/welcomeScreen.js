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
  ActivityIndicator,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import style from "../styleSheet/welcomeStyle";

export default function App() {
 
  return (
    <View style={{ margin: 30 }}>
      <Text style={styles.container}>Welcome</Text>
      <Text style={styles.container}>To</Text>
      <Text style={styles.title}>Google Forms</Text>
      <ActivityIndicator style={styles.indicator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    color: "#afafaf",
    textAlign: "center",
  },
  title: {
    fontSize: 40,
    color: "#afafaf",
    textAlign: "center",
  },
  indicator: {
    borderColor: "gray",
    margin: 50,
  },
});
