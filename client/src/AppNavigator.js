import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Splash from "./screens/Splash";
import MainScreen from "./screens/MainScreen";
import ClientLogIn from "./screens/client/ClientLogIn"
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="ClientLogin"
          component={ClientLogin}
          options={{ headerShown: false }}
        /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
