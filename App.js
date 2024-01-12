import { StatusBar as ExpoStatusBar } from "react-native";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { Text } from "react-native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme/index";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { SafeArea } from "./src/components/utility/safe-area.component";

import { restaurantsRequest } from "./src/services/restaurants/restaurants.service";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation/index";
import { AuthenticationContext } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyAfDYprIjCEhdt6ozbYem5glIo07R9pSS0",
  authDomain: "snackview-dc76a.firebaseapp.com",
  projectId: "snackview-dc76a",
  storageBucket: "snackview-dc76a.appspot.com",
  messagingSenderId: "890396719394",
  appId: "1:890396719394:ios:a7f14a5d29c17638310d7b",
};

initializeApp(firebaseConfig);

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => {
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>;
};

const Map = () => {
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>;
};

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
