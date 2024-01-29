import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Keyboard,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IconButton, MD3Colors } from "react-native-paper";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import SelectDropdown from "react-native-select-dropdown";

import HomeScreen from "../../sideScreens/HomeScreen";

const AddDoc = () => {
  const countries = ["None", "Cardio", "Physician", "Ortho", "Gyno"];
  const navigation = useNavigation();

  const [isStartTimePickerVisible, setStartTimePickerVisibility] =
    useState(null);
  const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(null);
  const [selectedDays, setSelectedDays] = useState([]);
  const [timeInputs, setTimeInputs] = useState([
    { id: 1, from: new Date(), to: new Date() },
  ]);

  const scrollViewRef = useRef();

  const showStartTimePicker = (id) => {
    Keyboard.dismiss();
    setStartTimePickerVisibility(id);
  };

  const hideStartTimePicker = () => {
    setStartTimePickerVisibility(null);
  };

  const handleStartTimeConfirm = (selectedTime, id) => {
    hideStartTimePicker();
    if (selectedTime !== undefined) {
      const updatedTimeInputs = timeInputs.map((input) =>
        input.id === id ? { ...input, from: selectedTime } : input
      );
      setTimeInputs(updatedTimeInputs);
    }
  };

  const showEndTimePicker = (id) => {
    Keyboard.dismiss();
    setEndTimePickerVisibility(id);
  };

  const hideEndTimePicker = () => {
    setEndTimePickerVisibility(null);
  };

  const handleEndTimeConfirm = (selectedTime, id) => {
    hideEndTimePicker();
    if (selectedTime !== undefined) {
      const updatedTimeInputs = timeInputs.map((input) =>
        input.id === id ? { ...input, to: selectedTime } : input
      );
      setTimeInputs(updatedTimeInputs);
    }
  };

  const addTimeInput = () => {
    const newInput = {
      id: timeInputs.length + 1,
      from: new Date(),
      to: new Date(),
    };
    setTimeInputs([...timeInputs, newInput]);

    // Scroll down to the newly added input
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  const removeTimeInput = (id) => {
    if (timeInputs.length > 1) {
      const updatedTimeInputs = timeInputs.filter((input) => input.id !== id);
      setTimeInputs(updatedTimeInputs);
    }
  };

  const toggleDaySelection = (day) => {
    const updatedSelectedDays = selectedDays.includes(day)
      ? selectedDays.filter((selectedDay) => selectedDay !== day)
      : [...selectedDays, day];

    setSelectedDays(updatedSelectedDays);
  };

  const renderDays = () => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return daysOfWeek.map((day) => (
      <TouchableOpacity
        key={day}
        style={[
          styles.dayContainer,
          selectedDays.includes(day) ? styles.selectedDay : null,
        ]}
        onPress={() => toggleDaySelection(day)}
      >
        <Text style={styles.dayText}>{day}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={{ flex: 1 }}>
      <HomeScreen />
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Doctor's name"
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Qualifications"
        ></TextInput>
        <Text
          style={{
            fontSize: 18,
            alignSelf: "flex-start",
            marginLeft: 70,
            marginBottom: 2,
          }}
        >
          Specialization
        </Text>
        <SelectDropdown
          data={countries}
          defaultValueByIndex={0}
          // defaultValue={'Egypt'}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultButtonText={"Select Specialization"}
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
        <TextInput style={styles.textInput} placeholder="Fees"></TextInput>

        <Text style={{ fontSize: 20 }}>Select Availability</Text>
        <Text style={{ alignSelf: "flex-start", fontSize: 20 }}>Weekdays</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {renderDays()}
        </ScrollView>
        <Text style={{ alignSelf: "flex-start", fontSize: 20 }}>
          Add Availability
        </Text>
        <ScrollView
          style={styles.intervalsContainer}
          horizontal={false}
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}
        >
          {timeInputs.map((input, index) => (
            <View key={input.id} style={styles.interval}>
              <View style={styles.timeInputContainer}>
                <Text style={styles.labelText}>From:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Select Time"
                  onFocus={() => showStartTimePicker(input.id)}
                  value={moment(input.from).format("h:mm A")}
                />
              </View>

              <View style={styles.timeInputContainer}>
                <Text style={styles.labelText}>To:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Select Time"
                  onFocus={() => showEndTimePicker(input.id)}
                  value={moment(input.to).format("h:mm A")}
                />
              </View>

              {timeInputs.length > 1 && (
                <IconButton
                  style={styles.removeButton}
                  icon="close-box-outline"
                  iconColor={MD3Colors.error50}
                  size={25}
                  onPress={() => removeTimeInput(input.id)}
                />
              )}

              <DateTimePickerModal
                isVisible={isStartTimePickerVisible === input.id}
                mode="time"
                onConfirm={(time) => handleStartTimeConfirm(time, input.id)}
                onCancel={hideStartTimePicker}
              />

              <DateTimePickerModal
                isVisible={isEndTimePickerVisible === input.id}
                mode="time"
                onConfirm={(time) => handleEndTimeConfirm(time, input.id)}
                onCancel={hideEndTimePicker}
              />
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.addButton} onPress={addTimeInput}>
          <Text style={styles.buttonText}>+ Add Interval</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSave}>
          <Text>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnExit}>
          <Text>Exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddDoc;

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
    // top: 150,
  },
  btnSave: {
    // flex:1,
    backgroundColor: "#ffff00",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    height: 30,
    width: 130,
    // top: 150,
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
  dayContainer: {
    justifyContent: "center",
    height: 35,
    width: 50,
    margin: 5,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: "#61dafb",
  },
  selectedDay: {
    backgroundColor: "green",
  },
  dayText: {
    color: "white",
    fontSize: 18,
    marginLeft: 5,
  },
  intervalsContainer: {
    maxHeight: 200,
    width: 400,
  },
  interval: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
  },
  timeInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  labelText: {
    color: "white",
    fontSize: 18,
    marginRight: 10,
  },
  input: {
    width: 90,
    padding: 5,
    backgroundColor: "#61dafb",
    borderRadius: 8,
    color: "white",
  },
  addButton: {
    backgroundColor: "#61dafb",
    padding: 10,
    borderRadius: 8,
    // marginTop: 10,
  },
  removeButton: {
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  selectedTimeContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  selectedTimeText: {
    color: "white",
    fontSize: 20,
  },
});
