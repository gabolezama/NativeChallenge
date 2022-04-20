//react
import React, { useState } from "react";
//expo
import { AntDesign } from '@expo/vector-icons';
//native
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { COLORS } from "../constants/color"
//components
import YearContent from "./YearContent";
import HeaderList from "../components/HeaderList";


const ListItem = ({years, item }) => {
    const [showData, setShowData] = useState(false);
    let arrayYears = [], diff = (parseInt(years[1])-parseInt(years[0]));
    for (let i = 0; i <= diff ; i++) {
        arrayYears.push( parseInt(years[0]) + i)
    }

    const handlerShowData = () => {
        setShowData(!showData);
    }

    const renderItemList = ({ item }) => (
        <YearContent years={arrayYears} item={item} />
    );

    return (
        <>
            <TouchableOpacity onPress={() => handlerShowData()}>
                <View style={styles.listItem}>
                    <Text style={styles.title}>{item.name}</Text>
                    {showData
                        ? <AntDesign name="up" size={24} color="black" />
                        : <AntDesign name="down" size={24} color="black" />
                    }
                </View>
            </TouchableOpacity>
            {showData &&
                <FlatList
                    data={item.listYears}
                    keyExtractor={(item) => item.year}
                    renderItem={renderItemList}
                    ListHeaderComponent={<HeaderList />}
                />
            }
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 42,
        paddingRight: 42,
        backgroundColor: COLORS.secondary,
        width: '100%',
        minHeight: 49,
        marginBottom: 1,
    },
    title: {
        fontFamily: "Comfortaa_Bolder",
        fontWeight: "900",
        fontSize: 24,
        lineHeight: 27,
        color: "#000000",
        width: '80%'
    },
    listYears:{
        minHeight: 130,
        maxHeight: 130
    }
});

export default ListItem;