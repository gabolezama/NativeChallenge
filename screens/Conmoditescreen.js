//react
import React, { useState } from "react";
//native
import { Text, View, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
//redux
import { useSelector, useDispatch } from "react-redux";
import { selectList } from "../store/actions/conmodites.actions";
//components
import Input from "../components/Input";
import Conmodities from "../components/Conmodities"

const Conmoditescreen = () => {

  const dispatch = useDispatch();

  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handlerChangeStart = (year) => {
    setStart(year);
    dispatch(selectList(year, end));
  };

  const handlerChangeEnd = (year) => {
    setEnd(year);
    dispatch(selectList(start, year));
  };

  return (
    <>
    <View style={styles.containerInputs}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled
        style={styles.KeyboardAwareScrollView}
      >
        
          <Text style={styles.title}>Commodity Price </Text>
          <Text style={styles.period}>Period </Text>
          <Input
            title={"Start"}
            initValue={start}
            handlerChange={handlerChangeStart}
          />
          <Input
            title={"End"}
            initValue={end}
            handlerChange={handlerChangeEnd}
          />
        </KeyboardAwareScrollView>
        </View>
        <Conmodities style={styles.containerResults} />
    </>
  );
};



const styles = StyleSheet.create({
  containerInputs: {
    marginTop: 20,
    marginBottom:22
  },
  containerResults: {
    flex: 0.6
  },
  title: {
    fontFamily: "Comfortaa_Bolder",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 36,
    lineHeight: 40,
    color: "#000000"
  },
  period: {
    fontFamily: "Comfortaa",
    textAlign: "center",
    fontWeight: "normal",
    fontSize: 36,
    lineHeight: 40,
    color: "#000000",
    marginTop: 21
  }
});

export default Conmoditescreen;
