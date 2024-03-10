import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { SERVER } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import HomeScreen from "../../sideScreens/HomeScreen";

const ClientLogIn = () => {
  const countries = ["Clinic", "Doctor's Chamber", "Testing Center"];
  const navigation = useNavigation();

  const [selectedValue, setSelectedValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginCred = async () => {
    if (selectedValue === "" || email === "" || password === "") {
      alert("please fill all the fields");
      return;
    }

    try {
      const response = await axios.post(
        SERVER + "/client/login",
        {
          clientType: selectedValue,
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      console.log("data: ", data);
      console.log("server:", SERVER);

      await AsyncStorage.setItem("token", data.token);
      await AsyncStorage.setItem("user", data.user);
      navigation.navigate("ClientDashboard");
    } catch (error) {
      console.log("error hai: \n", error);
      alert("correctly fill the form: " + error.response.data.error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <HomeScreen />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 18,
            alignSelf: "flex-start",
            marginLeft: 70,
            marginBottom: 2,
          }}
        >
          Select Client type
        </Text>
        <SelectDropdown
          data={countries}
          // defaultValueByIndex={1}
          // defaultValue={'Egypt'}
          onSelect={(selectedItem, index) => {
            // console.log(selectedItem, index);
            setSelectedValue(selectedItem);
          }}
          defaultButtonText={"Select Client"}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={"#444"}
                size={18}
              />
            );
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Email Id"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        ></TextInput>

        <TextInput
          style={styles.textInput}
          placeholder="Password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        ></TextInput>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            loginCred();
          }}
        >
          <Text
            style={{ textDecorationLine: "underline", fontStyle: "italic" }}
          >
            LogIn
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", color: "#fff", height: 30 }}>
          <Text style={{ color: "#fff" }}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ClientSignUp");
            }}
          >
            <Text>register yourself</Text>
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
  container: {
    flex: 1,
    backgroundColor: "#4472c4",
    alignItems: "center",
    justifyContent: "center",
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
    top: 150,
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
