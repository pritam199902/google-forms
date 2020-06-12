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
  Picker,
  TextInput,
} from "react-native";
import uuid from "react-native-uuid";
import { RadioButton } from "react-native-paper";

import Icon from "react-native-vector-icons/FontAwesome";
import { Modal, Provider, Portal } from "react-native-paper";
import Option from "./option";
import Ans from "./ansType/answer";
import Mcq from "./ansType/mcq";
import Txt from "./ansType/text";
import LongText from "./ansType/long-text";
import Home from "./home";

import App from "../App";

// import { DeleteOutlined } from "@ant-design/icons";

export default function AddAns(props) {
  // props.data.func(list);
  // components---------------------------------------
  // const [ansText, setAnsText] = useState({ optionText: "" });

  const long = () => {
    return (
      <View style={styles.row}>
        <TextInput
          multiline={true}
          placeholder="Write your Long answer.."
          mode="outlined"
          numberOfLines={4}
          autoFocus={true}
          multiline={true}
          style={{
            padding: 2,
            margin: 5,
            borderBottomWidth: 1,
            borderColor: "#afafaf",

            fontSize: 18,
            color: "gray",
            alignSelf: "center",
            width: "85%",
          }}
        />
      </View>
    );
  };
  const short = () => {
    return (
      <View style={styles.row}>
        <TextInput
          // dense={true}
          multiline={true}
          placeholder="Write your short answer.."
          mode="outlined"
          autoFocus={true}
          multiline={true}
          style={{
            padding: 2,
            margin: 5,
            borderBottomWidth: 1,
            borderColor: "#afafaf",

            fontSize: 18,
            color: "gray",
            alignSelf: "center",
            width: "85%",
          }}
        />
      </View>
    );
  };
  const mcq = (index, id) => {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <RadioButton.Group>
            <RadioButton />
            <TextInput
              style={styles.titleTxt}
              placeholder="Add answer value...."
              mode="outlined"
              autoFocus={true}
              multiline={true}
              value={ansText.optionText}
              onChangeText={(txt) => ansOptionTextHandle(txt, index, id)}
              style={{
                padding: 2,
                right: 10,
                borderBottomWidth: 1,
                borderColor: "#afafaf",
                margin: 5,
                fontSize: 18,
                color: "gray",
                alignSelf: "center",
                width: "70%",
              }}
            />
            {/* <TouchableOpacity style={styles.removeBtn}>
            <Icon name="remove" size={27} color="#d00" />
          </TouchableOpacity> */}
          </RadioButton.Group>
        </View>
      </View>
    );
  };
  // components-----------------Up to here ^----------------------

  // console.log(props);
  const [questionList, setQuestionList] = useState({
    qusetionNo: "",
    question: "",
    answer: [
      {
        answerType: "",
        answerOption: [],
      },
    ],
  });

  const ansType = [
    { id: 1, type: "mcq", label: "MCQ" },
    { id: 2, type: "short", label: "Short Answer" },
    { id: 3, type: "long", label: "Long Answer" },
  ];

  // Answer type select - default{mcq}
  const [selectedValue, setSelectedValue] = useState("mcq");
  // console.log(selectedValue);

  // Handling add answer item
  const [ansList, setAnsList] = useState({ answerItem: [] });
  // console.log("Answer List status:", ansList);

  function addAnswerItem() {
    // console.log(selectedValue);
    const newAnsItem = {
      id: uuid.v4(),
      type: selectedValue,
      qn: questionList.question,
      ansOption: [{ qnId: questionList.qusetionNo, optionText: "" }],
    };

    setAnsList({ answerItem: [...ansList.answerItem, newAnsItem] });
    // console.log("after adding a value", ansList);
    // props.data.func(list);
  }

  const [ansText, setAnsText] = useState({ optionText: "" });

  function ansOptionTextHandle(txt, index, id) {
    // console.log(txt);
    setAnsText({ optionText: txt });
    const data = {
      qnId: questionList.qusetionNo,
      optionText: txt,
    };
  }

  function removeItem(index) {
    // const anstype = ansList.answerItem[index];
    console.log(index, "removed");
    // console.log(anstype);
    // setQnNo;
    ansList.answerItem.splice(index, 1);
    setAnsList({ answerItem: [...ansList.answerItem] });
  }

  const [qnNo, setQnNo] = useState({ no: 0 });

  const [list, setList] = useState({ items: [] });
  function saveQn() {
    setQnNo({ no: ++qnNo.no });
    setAnsText;
    // console.log(qnNo.no);

    const questionSet = {
      questionNo: qnNo.no,
      question: props.data.question,
      answer: [
        {
          answerType: selectedValue,
          answerOption: [],
        },
      ],
    };
    // saving questions in a dictionary
    setList({ items: [...list.items, questionSet] });
    // <Home data={setList.items} />;
    // console.log(questionSet);
    props.data.func(questionSet);
  }

  return (
    <View vertical={true} style={styles.list}>
      <Text style={styles.itemTitle}>Add Answer </Text>
      <View style={styles.line} />
      <View style={styles.option}>
        <Text
          style={{
            color: "gray",
            alignSelf: "center",
            justifyContent: "center",
            fontSize: 16,
          }}
        >
          Answer type :
        </Text>
        {/* <Option key={ansType} data={ansType} /> */}
        <View style={styles.container}>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 170 }}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedValue(itemValue);
              // return <AddAnsBtn ansType={selectedValue} />;
              // props.getOption(selectedValue);
            }}
          >
            <Picker.Item label="MCQ Answer" value="mcq" />
            <Picker.Item label="Short Answer" value="short" />
            <Picker.Item label="Long Answer" value="long" />
          </Picker>
        </View>
      </View>

      <View style={styles.addAnsSec}>
        <View style={styles.line} />
        {ansList.answerItem.map((item, index) => {
          // console.log(index);
          return (
            <View key={index} style={styles.container}>
              <View style={styles.row}>
                {
                  item.type === "mcq"
                    ? mcq(index, item.id)
                    : // <Mcq key={index} value={item.id} textValue={[]} />
                    item.type === "short"
                    ? short()
                    : // <Txt key={index} value={item.id} />
                      long()
                  // <LongText key={index} value={item.id} />
                }

                <TouchableOpacity
                  style={styles.removeBtn}
                  onPress={() => {
                    removeItem(index);
                  }}
                >
                  <Icon
                    name="remove"
                    size={27}
                    color="#d00"
                    style={{ padding: 10 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
        <View style={styles.addAnsBtn}>
          <View style={styles.svBtn}>
            <TouchableOpacity
              onPress={() => {
                addAnswerItem();
              }}
            >
              <Icon name="plus-circle" size={35} color="#0a5" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.svBtnSv}>
        <TouchableOpacity onPress={() => saveQn()}>
          <Icon
            name="check-circle"
            size={59}
            style={{ margin: 0 }}
            color="#0d0"
          />
        </TouchableOpacity>
      </View>
      {/* <AddAnsBtn /> */}
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
  container: {
    margin: 5,
    // flexDirection: "column",
    // justifyContent: "space-between",
    // alignItems: "baseline",
    backgroundColor: "#ccffcc",
  },

  row: {
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "#aadfff",
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
  svBtnSv: {
    top: 30,
    right: 15,
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    alignItems: "center",
    borderRadius: 50,
    alignSelf: "flex-end",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },

    shadowOpacity: 0.5,
    shadowRadius: 5.49,

    elevation: 15,
  },

  container: {
    margin: 5,
    // flexDirection: "column",
    // justifyContent: "space-between",
    // alignItems: "baseline",App
    backgroundColor: "#ccffcc",
  },
  row: {
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "#aadfff",
  },
  titleTxt: {
    color: "gray",
    fontSize: 16,
  },
  removeBtn: {
    // backgroundColor: "green",
    justifyContent: "flex-end",
    margin: 10,
  },
});
