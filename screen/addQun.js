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
  ToastAndroid,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput, Modal } from "react-native-paper";
import AddAns from "./addAns";

import ListShow from "./listShower";

import Header from "./header";

export default function AddQuestion() {
  // console.log(landscape);

  // const [qnNo, setQnNo] = useState({
  //   no: 0,
  // });

  const [qnText, setQnText] = useState({ qn: "" });
  // console.log("before ", qnText.qn.length);

  function setQnTextHandle(txt) {
    setQnText({ qn: txt });
    // console.log("after:  ", qnText.qn.length);
  }

  const [ansTab, setAnsTab] = useState({
    show: false,
  });

  const showTab = () => {
    // console.log("onn ");
    // if (!ansTab.show) {
    //   ToastAndroid.show("Add-Answer opened !", ToastAndroid.SHORT);
    // }

    setAnsTab({ show: !ansTab.show });
  };
  const ansBtn = (
    <View style={styles.buttonArea}>
      <TouchableOpacity onPress={() => showTab()}>
        <Text style={styles.addAnsBtnTxt}>
          <Icon
            name="plus"
            size={20}
            style={{
              margin: 7,
              alignSelf: "center",
              textAlignVertical: "center",
            }}
            color="#00f"
          />
          Add Answer
        </Text>
      </TouchableOpacity>
    </View>
  );

  const ansBtnHide = (
    <View style={styles.buttonAreaRm}>
      <TouchableOpacity onPress={() => showTab()}>
        <Icon
          name="trash"
          size={50}
          style={{
            // alignSelf: "center",
            // textAlignVertical: "center",
            // shadowColor: "#000",
            // // shadowOffset: {
            // //   width: 0,
            // //   height: 2,
            // // },

            // shadowOpacity: 0.5,
            // shadowRadius: 5.49,
            textShadowRadius: 5,
            textShadowColor: "#000",
            textShadowOffset: {
              width: 2,
              height: 2,
            },

            elevation: 15,
          }}
          color="#ff5555"
        />
      </TouchableOpacity>
    </View>
  );

  const [data, setData] = useState({ list: [] });
  function getData(d) {
    // console.log("main data set", d);
    setData({ list: [...data.list, d] });
  }

  return (
    <>
      <Header />
      <ScrollView style={styles.showList}>
        {/* <AddItem /> */}
        <ScrollView>
          <View scrollEnabled={true} style={styles.addArea}>
            <View style={styles.title}>
              <Text style={styles.itemTitle}>Add Question </Text>
              <TextInput
                style={styles.texts}
                // dense={true}
                multiline={true}
                placeholder="Write your question.."
                value={qnText.qn}
                onChangeText={(txt) => setQnTextHandle(txt)}
              />
            </View>
            <View style={styles.addAnsBtn}>
              <View style={styles.addBtn}>
                <TouchableOpacity>
                  <Icon name="plus-circle" size={35} color="#0a5" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Toggle ans tab button and show ans tab */}

            <View>
              {ansTab.show ? (
                <AddAns
                  data={{ question: qnText.qn, func: getData.bind(this) }}
                />
              ) : null}
            </View>
            {ansTab.show ? ansBtnHide : ansBtn}

            {/* Save this question */}
          </View>
          <ListShow data={data.list} />
        </ScrollView>
      </ScrollView>
    </>
    // <View scrollEnabled={true} style={styles.addArea}>
    //   <View style={styles.title}>
    //     <Text style={styles.itemTitle}>Add Question </Text>
    //     <TextInput
    //       style={styles.texts}
    //       // dense={true}
    //       multiline={true}
    //       placeholder="Write your question.."
    //       value={qnText.qn}
    //       onChangeText={(txt) => setQnTextHandle(txt)}
    //     />
    //   </View>
    //   <View style={styles.addAnsBtn}>
    //     <View style={styles.addBtn}>
    //       <TouchableOpacity>
    //         <Icon name="plus-circle" size={35} color="#0a5" />
    //       </TouchableOpacity>
    //     </View>
    //   </View>

    //   {/* Toggle ans tab button and show ans tab */}

    //   <View>
    //     {ansTab.show ? <AddAns data={{ question: qnText.qn }} /> : null}
    //   </View>
    //   {ansTab.show ? ansBtnHide : ansBtn}

    //   {/* Save this question */}
    // </View>
  );
}

const styles = StyleSheet.create({
  texts: {
    margin: 10,
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "gray",
    alignSelf: "center",
  },
  title: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  addArea: {
    backgroundColor: "#fff",

    elevation: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    margin: 10,
    marginBottom: 40,
    flexDirection: "column",
    // justifyContent: "space-between",

    shadowColor: "#000",
    shadowOffset: {
      width: 1,
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
  buttonAreaRm: {
    top: 30,

    backgroundColor: "#fff",
    // width: 155,
    // paddingLeft: 15,
    // paddingRight: 15,
    // height: 50,
    alignItems: "center",
    // borderRadius: 50,
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonArea: {
    top: 30,

    backgroundColor: "#fff",
    // width: 155,
    paddingLeft: 15,
    paddingRight: 15,
    height: 50,
    alignItems: "center",
    borderRadius: 50,
    alignSelf: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.5,
    shadowRadius: 5.49,

    elevation: 15,
  },
  addAnsBtnTxt: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  svBtn: {
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
  addBtn: {
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
    marginTop: 5,
  },
});
