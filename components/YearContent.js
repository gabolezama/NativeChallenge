//react
import React from "react";
//native
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
//utilities
import { FormatNumber } from "../utilities/FormatNumber";


const YearContent = ({years, item }) => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{years[parseInt(Object.keys(item)[0])]}</Text>
            <Text style={styles.title}>USD <FormatNumber number={Object.values(item)[0]} /></Text>
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

export default YearContent;