import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import HomeScreen from "../../sideScreens/HomeScreen";

const ClientLogin = () => {
  const countries = ["Clinic", "Doctor's Chamber", "Testing Center"];
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [contactPersonName, setContactPersonName] = useState("");

  const sendCred = async () => {
    console.log("username: ", username);
    console.log("email: ", email);
    console.log("password: ", password);
    console.log("confirm password:", confirmPassword);
    console.log("phone number:", phoneNumber);
    console.log("organization name:", organizationName);
    console.log("contact person name:", contactPersonName);

    fetch("http://10.117.10.75:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        console.log("data: ", data);

        try {
          await AsyncStorage.setItem("token", data.token);
          navigation.navigate("AuthRegister");
        } catch (e) {
          console.log("error hai : \n", e);
          alert("correctly fill the form : " + data.error);
        }
      });
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
            console.log(selectedItem, index);
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
          placeholder="Username*"
          value={username}
          onChangeText={(text) => {
            setUsername(text);
          }}
        ></TextInput>

        <TextInput
          style={styles.textInput}
          placeholder="Email Id*"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        ></TextInput>

        <TextInput
          style={styles.textInput}
          placeholder="Password*"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        ></TextInput>

        <TextInput
          style={styles.textInput}
          placeholder="Confirm Password*"
          value={confirmPassword}
          onChangeText={(text) => {
            setConfirmPassword(text);
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
          placeholder="Name of Organization"
          value={organizationName}
          onChangeText={(text) => {
            setOrganizationName(text);
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

export default ClientLogin;

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
