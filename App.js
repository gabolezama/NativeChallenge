//import 'react-native-gesture-handler';
//react
import React from "react";
//Navigator
import AppNavigator from "./navigation/AppNavigator";
//redux
import { Provider } from "react-redux";
import store from "./store";
//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {

  const [loaded] = useFonts({
    Comfortaa: require("./assets/fonts/Comfortaa-Regular.ttf"),
    Comfortaa_Bolder: require("./assets/fonts/Comfortaa-Bold.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
