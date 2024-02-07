import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import SelectDropdown from "react-native-select-dropdown";

import HomeScreen from "../../sideScreens/HomeScreen";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const GetList = () => {
  const data = [
    { id: "1", slNo: "1", patientName: "John Doe" },
    { id: "2", slNo: "2", patientName: "Jane Doe" },
    { id: "3", slNo: "3", patientName: "Alice Smith" },
    { id: "4", slNo: "4", patientName: "Allen Smith" },
    { id: "5", slNo: "5", patientName: "Hugo Smith" },
    { id: "6", slNo: "6", patientName: "Martin Garrix" },
    // Add more data as needed
  ];

  const renderTableItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{item.slNo}</Text>
      <Text style={styles.tableCell}>{item.patientName}</Text>
    </View>
  );
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <HomeScreen />
      <View style={styles.container}>
        <View>
          <View style={styles.tableHeader}>
            <Text style={styles.headerCell}>Sl no</Text>
            <Text style={styles.headerCell}>Patients name</Text>
          </View>

          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderTableItem}
          />
        </View>
        <TouchableOpacity style={styles.btnExit}>
          <Text>Exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetList;

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
    alignSelf: "center",
    margin: 5,
    height: 30,
    width: 150,
    top: 150,
  },

  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#4472c4",
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  headerCell: {
    color: "white",
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
    color: "#fff",
  },
});
