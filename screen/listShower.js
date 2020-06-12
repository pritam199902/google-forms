import React, { useState } from "react";
import { ScrollView, View, Platform, ToastAndroid } from "react-native";
import Item from "./item";

// export const  = '';

export default function ListShower(props) {
  // const [itemList, setItemList] = useState({dat});

  // setItemList({ data: props.data });

  // console.log(itemList);
  console.log(props.data);

  function removeItem(item) {
    alert(item);
    console.log("Before:  ", props.data);

    props.data.splice(Item, 1);
    console.log("After:  ", props.data);
  }

  return (
    <ScrollView style={{ alignContent: "space-between" }}>
      {/* {alert("Question added successfully!")} */}
      {props.data.map((item, index) => {
        // console.log(item);
        // console.log(index);

        return <Item key={index} data={item} func={removeItem.bind(this)} />;
      })}
    </ScrollView>
  );
}
