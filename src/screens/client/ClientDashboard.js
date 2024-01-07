import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import SelectDropdown from "react-native-select-dropdown";

import HomeScreen from "../../sideScreens/HomeScreen";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ClientLogIn = () => {
  const countries = ["Clinic", "Doctor's Chamber", "Testing Center"];
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <HomeScreen />
      <View style={styles.container1}>
        <View style={styles.container2}>
          <TouchableOpacity style={styles.cards}>
            <Text style={styles.text}>Add Doctor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cards}>
            <Text style={styles.text}>Remove Doctor</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={styles.cards}>
            <Text style={styles.text}>Change Timings of Doctor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cards}>
            <Text style={styles.text}>Patient List</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnExit}>
          <Text>Exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ClientLogIn;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#4472c4",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flexDirection: "row",
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  cards: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a29962",
    height: 140,
    width: 140,
    margin: 20,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
  },
  textInput: {
    // flex:1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    height: 30,
    width: 258,
    borderRadius: 3,
  },
  btn: {
    // flex:1,
    backgroundColor: "#ffff00",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    height: 30,
    width: 150,
  },
  loginBtn: {
    // flex:1,
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    height: 30,
    width: 150,
  },
  btnExit: {
    // flex:1,
    backgroundColor: "#ffff00",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    height: 30,
    width: 150,
    top: 30,
  },
  dropdown1BtnStyle: {
    width: 260,
    height: 40,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
});
