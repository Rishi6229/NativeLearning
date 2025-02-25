import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

import GoalItem from "./Components/goalItem";

export default function App() {
  const [enteredGoal, setEnteredText] = useState("");
  const [goalsList, setGoalsList] = useState([]);

  function goalInputHandler(enteredGoal) {
    setEnteredText(enteredGoal);
  }

  function addGoalHandler() {
    console.log(enteredGoal);
    setGoalsList((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoal, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="add your goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
           return <GoalItem text={itemData.item.text}/>
          }}
          keyExtractor={(item , index)=> {
            return item.id;
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "75%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4.5,
  }
});
