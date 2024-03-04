import {
  AntDesign,
  FontAwesome,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Sidebar = ({ navigation }) => {
  const [user, setUser] = useState("User");

  useFocusEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("user");
        if (value !== null) {
          setUser(value);
        }
      } catch (e) {
        console.log(e);
      }
      console.log("user: ", user);
    };
    getData();
  });

  const logout = async () => {
    console.log("logout");
    try {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("user");
      navigation.navigate("Home");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ height: 5, width: "100", backgroundColor: "blue" }}></View>

      <FontAwesome
        style={{ marginTop: 10, alignSelf: "center" }}
        name="user-md"
        size={80}
        color="black"
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        {user}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: 200,
          marginTop: 60,
          paddingTop: 15,
          borderTopWidth: 1,
          borderTopColor: "grey",
        }}
      >
        <AntDesign
          style={{ marginLeft: -30 }}
          name="infocirlceo"
          size={24}
          color="black"
        />
        <Text
          style={{
            fontSize: 15,
            fontWeight: "600",
            marginLeft: 15,
            //   alignSelf: "center",
          }}
        >
          About this app
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: 200,
          marginTop: 10,
        }}
      >
        <Octicons
          style={{ marginLeft: -29 }}
          name="cross-reference"
          size={24}
          color="black"
        />
        <Text
          style={{
            fontSize: 15,
            fontWeight: "600",
            marginLeft: 15,
            //   alignSelf: "center",
          }}
        >
          Get Referral code
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 15,
          borderTopWidth: 1,
          borderTopColor: "grey",
          width: 200,
          top: 430,
        }}
      >
        <SimpleLineIcons
          style={{ marginLeft: -32 }}
          name="logout"
          size={24}
          color="red"
        />
        <Text
          style={{
            fontSize: 15,
            fontWeight: "600",
            marginLeft: 19,
            color: "red",
            //   alignSelf: "center",
          }}
          onPress={() => {
            logout();
          }}
        >
          Logout
        </Text>
      </View>
    </View>
  );
};

export default Sidebar;

const styles = StyleSheet.create({});
