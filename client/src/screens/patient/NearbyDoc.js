import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import HomeScreen from "../../sideScreens/HomeScreen";
import { useNavigation } from "@react-navigation/native";

const NearbyDoc = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. John Doe",
      specialization: "Cardiologist",
      qualification: "MD, PhD",
      image:
        "https://th.bing.com/th/id/R.f4f3dd7acfd64b16aa51027159a6f5e8?rik=h20uRBdllFbzXA&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2009%2f04%2fcircle-people-icon-flat-png_236449.png&ehk=jAZRbQHFLRzZkayBusRr0%2fGLtYOlmNpAQHB91EzkCog%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      name: "Dr. Ja Smith",
      specialization: "Orthopedic Surgeon",
      qualification: "MS, MCh",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
  ]);

  const navigation = useNavigation();

  const renderDoctorCard = ({ item }) => (
    <View style={styles.card}>
      <Image style={styles.doctorImage} source={{ uri: item.image }} />
      <View style={styles.doctorDetails}>
        <Text style={{ backgroundColor: "red" }}>{item.name}hello</Text>
        <Text>{item.specialization}</Text>
        <Text>{item.qualification}</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <HomeScreen />
      <View style={styles.container}>
        <FlatList
          data={doctors}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderDoctorCard}
        />
        <TouchableOpacity style={styles.btnExit}>
          <Text>Exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NearbyDoc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4472c4",
    alignItems: "center",
    justifyContent: "center",
  },
  btnExit: {
    backgroundColor: "#ffff00",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    height: 30,
    width: 150,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height:100,
    width:350,
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
  },
  doctorImage: {
    width: 60,
    height: 60,
    backgroundColor:"red",
    borderRadius: 30,
    marginRight: 10,
  },
  doctorDetails: {
    flex: 1,
  },
});
