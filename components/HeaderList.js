//react
import React from "react";
//native
import { StyleSheet, View, Text } from "react-native";


const HeaderList = () => {
  
  return (
    <View style={styles.container}>
            <Text style={styles.title}>Year</Text>
            <Text style={styles.title}>Price</Text>
        </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 30,
        paddingLeft: 70,
        paddingRight: 70,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title:{
        fontFamily: "Comfortaa",
        fontStyle: 'normal',
        fontSize: 18,
        lineHeight: 20,
        color: "#000000",
    }
});

export default HeaderList;