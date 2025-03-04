import React from "react";
import { StyleSheet, View, TextInput, Button, Modal ,Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoal, setEnteredText] = useState("");

  function goalInputHandler(enteredGoal) {
    setEnteredText(enteredGoal);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoal);
    setEnteredText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style = {styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="add your goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>

          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    backgroundColor:'#311b6b'
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 16,
    borderColor: '#e4d0ff',
    backgroundColor:'#e4d0ff',
    color:'#120438'
  },

  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 8,
    width: "30%",
  },
  image:{
    width:100,
    height:100,
    margin:20
  }
});
