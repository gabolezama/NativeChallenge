//react
import React from "react";
//Navigation
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {DrawerContent} from '../screens/DrawerContent'
//Screens
import HomeScreen from "../screens/HomeScreen.js";
import Conmoditescreen from "../screens/Conmoditescreen.js";
//Constants
import { COLORS } from "../constants/color";
import { ROUTES } from "../constants/routes";
import { TITLES } from "../constants/routes";

const Drawer = createDrawerNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator
    drawerContent={props => <DrawerContent {...props}/>}
    
      initialRouteName={ROUTES.Home}
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary
        },
        headerTitle: TITLES.App,
      }}
    >
      <Drawer.Screen name={ROUTES.Home} component={HomeScreen} options={{
        title: TITLES.Home
      }}/>
      <Drawer.Screen name={ROUTES.Conmodites} component={Conmoditescreen} options={{
        title: TITLES.Conmodites
      }}/>
    </Drawer.Navigator>
  </NavigationContainer>
);

export default AppNavigator;

