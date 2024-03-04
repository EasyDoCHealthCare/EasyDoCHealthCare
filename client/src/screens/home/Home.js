import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HomeScreen from "../../sideScreens/HomeScreen";
import ClientDashboard from "../client/ClientDashboard";

const Home = () => {
  const navigation = useNavigation();

  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("token");
        if (value !== null) {
          setIsLogged(true);
        }
      } catch (e) {
        setIsLogged(false);
        console.log(e);
      }
    };
    getData();
  }, []);

  if (isLogged) {
    return <ClientDashboard />;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <HomeScreen />
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate("PatLogIn");
            }}
          >
            <Text>Patient Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate("ClientLogIn");
            }}
          >
            <Text>Client Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text>Admin Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnExit}>
            <Text>Exit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4472c4",
    alignItems: "center",
    justifyContent: "center",
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
  btnExit: {
    // flex:1,
    backgroundColor: "#ffff00",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    height: 30,
    width: 150,
    top: 250,
  },
});
