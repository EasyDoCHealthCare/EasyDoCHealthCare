import { StyleSheet, Text, View } from "react-native";
import React from "react";

const navbar = () => {
  return (
    <View style={styles.container}>
      <Text>navbar</Text>
    </View>
  );
};

export default navbar;

const styles = StyleSheet.create({
  container: {
    // flex:1,
    position: "absolute",
    zIndex:5,
    backgroundColor: "black",
    margin: 20,
    height: 30,
    width: "auto",
  },
});
