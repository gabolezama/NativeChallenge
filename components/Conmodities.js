//react
import React, { useState } from "react";
//native
import { Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
//redux
import { useSelector } from "react-redux";
//components
import ListItem from "./ListItem"
//constants
import { COLORS } from "../constants/color";

const Conmodities = () => {

    const list = useSelector((state) => state.conmodites.list);
    const years = useSelector((state) => state.conmodites.years);

    const renderItemList = ({ item }) => (
        <ListItem years={years} item={item} />
    );

    return (
        <>
            {
                //si la busqueda inicio, se muestra el spinner de busqueda
                (years[0] === 'find' && years[1] === 'find')
                    ? <ActivityIndicator size="large" color={COLORS.aside} />
                    :
                    list.length === 0
                        ? <Text style={styles.noData} >No existen datos para el rango seleccionado</Text>
                        : <FlatList
                            data={list}
                            keyExtractor={(item) => item.name}
                            renderItem={renderItemList}
                        />
            }
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    noData: {
        fontFamily: "Comfortaa",
        textAlign: "center",
        fontWeight: "normal",
        fontSize: 25,
        lineHeight: 28,
        color: "#000000",
    }
});

export default Conmodities;