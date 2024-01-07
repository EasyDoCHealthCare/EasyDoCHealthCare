import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Reach us</Text>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Octicons name="three-bars" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    // position:"absolute",
    marginTop: 25,
    // zIndex:5
  },
  header: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 3,
    backgroundColor: "black",
  },
  menuIcon: {
    marginRight: 15,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
    marginLeft: 15,
  },
});

export default HomeScreen;
