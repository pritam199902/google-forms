import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Alert,
  Lis,
  ScrollView,
  Platform,
} from "react-native";

import Header from "./header";
import Item from "./item";
import AddItem from "./addQun";

import ListShow from "./listShower";

export default function Home() {
  // console.log(Platform.OS);
  // console.log(props);

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <AddItem />
      {/* <Header />
      <ScrollView style={styles.showList}>
        <AddItem />
        <ScrollView>
          <ListShow />
        </ScrollView>
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fafafa",
    textAlign: "center",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "gray",
  },
  list: {
    backgroundColor: "#fff",
    elevation: 5,
    padding: 15,
    borderRadius: 15,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.49,

    elevation: 12,
  },
  itemDelete: {
    color: "red",
    fontWeight: "bold",
    fontSize: 25,
  },
  showList: {
    alignContent: "space-between",
    // marginLeft: Platform.OS === "web" ? 150 : 0,
    // marginRight: Platform.OS === "web" ? 150 : 0,
  },
});
