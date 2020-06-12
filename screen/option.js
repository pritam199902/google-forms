import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Ans from "./ansType/answer";
import AddAns from "./addAns";

import AddAnsBtn from "./addAnsBtn";

export default function Option(props) {
  const [selectedValue, setSelectedValue] = useState("mcq");
  // <AddAnsBtn ansType={selectedValue} />;

  // console.log(selectedValue);
  console.log(props);

  return (
    <>
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    alignItems: "center",
  },
});
