import * as React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

export default class LongText extends React.Component {
  render() {
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
  }
}

const styles = StyleSheet.create({
  row: {
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "#aadfff",
  },
});
