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
import AddDoc from "./client/AddDoc";
import RemoveDoc from "./client/RemoveDoc";
import ChangeTimings from "./client/ChangeTimings";
import PatList from "./client/PatList";
import GetList from "./client/GetList";
import PatLogIn from "./patient/PatLogIn";
import PatSignUp from "./patient/PatSignUp";
import PatAuthRegister from "./patient/PatAuthRegister";
import PatLoginSuccess from "./patient/PatLoginSuccess";
import PatDashboard from "./patient/PatDashboard";
import NearbyDoc from "./patient/NearbyDoc";

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
      <Drawer.Screen
        name="AddDoc"
        component={AddDoc}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="RemoveDoc"
        component={RemoveDoc}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ChangeTimings"
        component={ChangeTimings}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="PatList"
        component={PatList}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="GetList"
        component={GetList}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="PatLogIn"
        component={PatLogIn}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="PatSignUp"
        component={PatSignUp}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="PatAuthRegister"
        component={PatAuthRegister}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="PatLoginSuccess"
        component={PatLoginSuccess}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="PatDashboard"
        component={PatDashboard}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="NearbyDoc"
        component={NearbyDoc}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
