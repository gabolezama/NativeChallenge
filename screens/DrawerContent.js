import React from "react";
//native
import { View, Text, StyleSheet } from "react-native";
//navogation
import { DrawerContentScrollView } from "@react-navigation/drawer";
//constants
import { COLORS } from "../constants/color";
import { ROUTES } from "../constants/routes";
import { TITLES } from "../constants/routes";
//expo
import { Ionicons } from "@expo/vector-icons";

export function DrawerContent(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="black"
          style={styles.backArrow}
          onPress={() => {
            props.navigation.closeDrawer();
          }}
        />
        <View style={styles.containerRoutes}>
          <Text
            style={styles.route}
            onPress={() => {
              props.navigation.navigate(ROUTES.Home);
            }}
          >
            {TITLES.Home}
          </Text>
          <Text
            style={styles.route}
            onPress={() => {
              props.navigation.navigate(ROUTES.Conmodites);
            }}
          >
            {TITLES.Conmodites}
          </Text>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.aside,
    padding: 21,
    paddingTop: 94,
  },
  containerRoutes: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: 58
  },
  route: {
    fontFamily: "Comfortaa",
    textAlign: "center",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 20,
    color: "#000000",
    marginTop:14,
    marginBottom:14,
  },
  backArrow: {
    alignSelf: "flex-end"
  }
});
