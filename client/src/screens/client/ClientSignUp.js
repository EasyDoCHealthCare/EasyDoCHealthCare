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
import { set } from "date-fns";
import React, { useState } from "react";
import HomeScreen from "../../sideScreens/HomeScreen";

const ClientSignUp = () => {
  const countries = ["Clinic", "Doctor's Chamber", "Testing Center"];
  const navigation = useNavigation();

  const [selectedValue, setSelectedValue] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactPersonName, setContactPersonName] = useState("");

  const sendCred = async () => {
    // check if password and confirm password are same
    if (password !== confirmPassword) {
      alert("password and confirm password are not same");
      return;
    }

    // check if any field is empty
    if (
      selectedValue === "" ||
      organizationName === "" ||
      email === "" ||
      phoneNumber === "" ||
      username === "" ||
      password === "" ||
      confirmPassword === "" ||
      contactPersonName === ""
    ) {
      alert("please fill all the fields");
      return;
    }

    // check if email is valid
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      alert("please enter a valid email");
      return;
    }

    try {
      const response = await axios.post(
        SERVER + "/client/signup",
        {
          clienttype: selectedValue,
          organizationName: organizationName,
          email: email,
          phoneNumber: phoneNumber,
          username: username,
          password: password,
          contactPersonName: contactPersonName,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      console.log("data: ", data);

      await AsyncStorage.setItem("token", data.token);
      navigation.navigate("AuthRegister");
    } catch (e) {
      console.log("error hai : \n", e);
      alert("correctly fill the form : " + data.error);
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
          placeholder="Name of Organization"
          value={organizationName}
          onChangeText={(text) => {
            setOrganizationName(text);
          }}
        ></TextInput>

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
          placeholder="Phone Number"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={(text) => {
            setPhoneNumber(text);
          }}
        ></TextInput>

        <TextInput
          style={styles.textInput}
          placeholder="Username"
          value={username}
          onChangeText={(text) => {
            setUsername(text);
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

        <TextInput
          style={styles.textInput}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(text) => {
            setConfirmPassword(text);
          }}
        ></TextInput>

        <TextInput
          style={styles.textInput}
          placeholder="Name of contact person"
          value={contactPersonName}
          onChangeText={(text) => {
            setContactPersonName(text);
          }}
        ></TextInput>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            sendCred();
          }}
        >
          <Text
            style={{ textDecorationLine: "underline", fontStyle: "italic" }}
          >
            Next
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", color: "#fff", height: 30 }}>
          <Text style={{ color: "#fff" }}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ClientLogIn");
            }}
          >
            <Text>LogIn</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnExit}>
          <Text>Exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ClientSignUp;

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
    top: 100,
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
