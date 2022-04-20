//react
import React, { useState } from "react";
//native
import { View, Text, StyleSheet, TextInput } from "react-native";

const Input = ({ title, initValue, handlerChange }) => {
  const [inputValue, setInputValue] = useState(initValue);

  const handleChangeText = (year) => {
    setInputValue(year);
    handlerChange(year);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        value={inputValue}
        onChangeText={handleChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop:15,
  },
  title: {
    width: 60,
    fontFamily: "Comfortaa",
    textAlign: "center",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 20,
    color: "#000000",
    marginRight: 12
  },
  input: {
    borderColor: "#000000",
    borderWidth: 1,
    borderStyle: "solid",
    width: 75.5,
    height: 22.5,
    fontFamily: "Comfortaa",
    textAlign: "center",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 20,
    color: "#000000"
  }
});

export default Input;
