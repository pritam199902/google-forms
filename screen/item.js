import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Alert,
  Lis,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

// import { DeleteOutlined } from "@ant-design/icons";

export default function Item(props) {
  console.log("ITEM", props);

  function removeIt() {
    // alert("Remove" + props.data.questionNo);
    props.func(props.data.questionNo);
  }

  function editIt() {
    alert("Edit" + props.data.questionNo);
  }

  return (
    <View vertical={true} style={styles.list}>
      <View style={styles.option}>
        <TouchableOpacity
          onPress={() => {
            editIt();
          }}
        >
          <Icon name="edit" size={30} color="#aaaafa" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            removeIt();
          }}
        >
          <Icon name="remove" size={30} color="#d00" />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />

      <Text style={styles.itemTitle}>
        {props.data.questionNo}. {props.data.question}
      </Text>
      <View style={styles.line} />
      <View style={styles.ansArea}>
        <View style={styles.ans}>
          <Icon
            name="pencil-square"
            size={20}
            style={{
              margin: 7,
              alignSelf: "center",
              textAlignVertical: "center",
              marginHorizontal: 10,
              width: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
            color="#00f"
          />
          <Text style={styles.ansTypeTxt}>
            {props.data.answer.map((i, index) => {
              return i.answerType;
            })}
          </Text>
        </View>
        <View style={styles.ans}>
          <Icon
            name="pencil"
            size={20}
            style={{
              margin: 7,
              alignSelf: "center",
              textAlignVertical: "center",
              marginHorizontal: 10,
              width: 30,
              alignItems: "center",
              justifyContent: "center",
              alignContent: "flex-start",
            }}
            color="#00f"
          />
          <TextInput
            style={styles.itemOption}
            multiline={true}
            placeholder="Write your answer...."
          />
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
    fontSize: 18,
    padding: 10,
    fontWeight: "bold",
    color: "#ff9999",
  },
  itemOption: {
    fontSize: 16,
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    fontWeight: "normal",
    color: "#9999ff",
  },
  list: {
    backgroundColor: "#fff",
    elevation: 5,
    padding: 15,
    borderRadius: 15,
    margin: 6,
    flexDirection: "column",
    // justifyContent: "space-between",

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
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 1,
  },
  line: {
    margin: 10,
    borderBottomColor: "#a0a0af",
    borderBottomWidth: 1,
  },
  ansArea: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "baseline",
    marginLeft: 10,
    marginRight: 10,
  },
  ans: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ansTypeTxt: {
    fontSize: 16,
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    fontWeight: "normal",
    color: "#9999ff",
  },
});
