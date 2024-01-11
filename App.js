import { StatusBar as ExpoStatusBar } from "react-native";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/index";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Platform,
} from "react-native";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
