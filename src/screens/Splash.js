import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("MainScreen");
    }, 3000);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "700" }}>Loading...</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
