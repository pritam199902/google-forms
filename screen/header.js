import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Alert,
} from "react-native";

export default function Header() {
  // console.log(landscape);

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Forms</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "darkslateblue",
    alignContent: "center",
    padding: 10,
    elevation: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fafafa",
    textAlign: "center",
  },
});
