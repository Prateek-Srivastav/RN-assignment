import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { enableScreens } from "react-native-screens";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import AuthScreen from "./screens/AuthScreen";
import JobCard from "./components/JobCard";

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "product-sans-light": require("./assets/fonts/ProductSans-Light.ttf"),
    "product-sans-regular": require("./assets/fonts/ProductSans-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <AuthScreen />;
}
