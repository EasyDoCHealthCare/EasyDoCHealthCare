import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

import OTPTextInput from "react-native-otp-textinput";

import HomeScreen from "../../sideScreens/HomeScreen";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ClientLogin = () => {
  const countries = ["Clinic", "Doctor's Chamber", "Testing Center"];
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <HomeScreen />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 18,
            marginTop: 80,
            alignSelf: "flex-start",
          }}
        >
          Please enter OTP send to your mobile number:
        </Text>
        <OTPTextInput
          tintColor={"black"}
          offTintColor={"lightgreen"}
          defaultValue=""
          inputCount={4}
        />
        <Text style={{ fontSize: 18, marginTop: 20, alignSelf: "flex-start" }}>
          Please enter OTP send to your email:
        </Text>
        <OTPTextInput
          tintColor={"black"}
          offTintColor={"lightgreen"}
          defaultValue=""
          inputCount={4}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Address of your Organization"
        ></TextInput>

        <TouchableOpacity style={styles.loginBtn} onPress={()=>{navigation.navigate("LogInSuccess")}}>
          <Text
            style={{ textDecorationLine: "underline", fontStyle: "italic" }}
          >
            Register
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", color: "#fff", height: 30 }}>
          <Text style={{ color: "#fff" }}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ClientLogin");
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
    // justifyContent: "center",
  },
  textInput: {
    // flex:1,
    marginTop: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    height: 40,
    width: 350,
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
    margin: 20,
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
