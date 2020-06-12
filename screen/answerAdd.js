import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Alert,
  Lis,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { Modal, Provider, Portal } from "react-native-paper";
import Option from "./option";
import Mcq from "./ansType/mcq";
import LongAns from "./ansType/long-text";
import Txt from "./ansType/text";
import Ans from "./ansType/answer";

// import { DeleteOutlined } from "@ant-design/icons";

export default function AddAnsBtn(props) {
  // console.log(props.ansType);

  const [itemList, setItemList] = useState({
    items: [],
  });

  function addAnswer(props) {
    console.log(props);

    // console.log(props);
    <Ans data={{ type: "mcq" }} />;
    // <Ans data={{ type: "short" }} />;
    // const newData = {
    //   qId: 4,
    //   ansType: "akjs",
    //   ansValue: "item 4",
    // };
    // setItemList({ items: [...itemList.items, newData] });
  }

  return (
    <View style={styles.addAnsSec}>
      <View style={styles.container}>
        <View style={styles.row}>
          {props.data.type === "mcq" ? (
            <Mcq />
          ) : props.data.type === "short" ? (
            <Txt />
          ) : (
            <LongText />
          )}

          <TouchableOpacity key={props.ansType} style={styles.removeBtn}>
            <Icon name="remove" size={27} color="#d00" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.addAnsBtn}>
        <View style={styles.svBtn}>
          <TouchableOpacity onPress={() => addAnswer(props)}>
            <Icon name="plus-circle" size={35} color="#0a5" />
          </TouchableOpacity>
        </View>
      </View>
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
    alignSelf: "center",
  },
  itemOption: {
    fontSize: 16,
    padding: 10,
    fontWeight: "normal",
    color: "gray",
  },
  list: {
    backgroundColor: "#fff",
    elevation: 5,
    padding: 15,
    borderRadius: 0,
    marginTop: 10,
    flexDirection: "column",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6.49,

    elevation: 4,
  },
  itemDelete: {
    color: "red",
    fontWeight: "bold",
    fontSize: 25,
  },
  showList: {
    alignContent: "space-between",
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 1,
  },
  line: {
    margin: 10,
    borderBottomColor: "#a0a0af",
    borderBottomWidth: 1,
  },
  svBtn: {
    top: 0,

    backgroundColor: "#fff",
    width: 30,
    height: 30,
    alignItems: "center",
    borderRadius: 50,

    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.5,
    shadowRadius: 5.49,

    elevation: 5,
  },
  addAnsBtn: {
    alignSelf: "center",
    // backgroundColor: "green",
    marginTop: 10,
  },
  addAnsSec: {
    // backgroundColor: "yellow",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
