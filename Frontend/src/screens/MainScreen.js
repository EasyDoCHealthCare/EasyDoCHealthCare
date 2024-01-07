import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../sideScreens/HomeScreen";
import Home from "./home/Home";
import Notifications from "./Notifications";
import Sidebar from "./Sidebar";
import ClientLogIn from "./client/ClientLogIn";
import ClientSignUp from "./client/ClientSignUp";
import AuthRegister from "./client/AuthRegister";
import LogInSuccess from "./client/LogInSuccess";
import ClientDashboard from "./client/ClientDashboard";

const Drawer = createDrawerNavigator();

const MainScreen = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ClientLogIn"
        component={ClientLogIn}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ClientSignUp"
        component={ClientSignUp}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="AuthRegister"
        component={AuthRegister}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="LogInSuccess"
        component={LogInSuccess}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ClientDashboard"
        component={ClientDashboard}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
