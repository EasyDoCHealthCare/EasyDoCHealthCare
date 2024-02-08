import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  FontAwesome,
  Octicons,
  AntDesign,
  SimpleLineIcons,
} from "@expo/vector-icons";

const Sidebar = ({ navigation }) => {
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
        User
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
        >
          Logout
        </Text>
      </View>
    </View>
  );
};

export default Sidebar;

const styles = StyleSheet.create({});
