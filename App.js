import { useState } from "react";
import { StyleSheet, View, FlatList, Modal, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [goalsList, setGoalsList] = useState([]);

  function startAddGoalHandler() {
    setModalVisible(true);
  }

  function endAddGoalHandler() {
    setModalVisible(false);
  }

  function addGoalHandler(enteredGoal) {
    console.log(enteredGoal);
    setGoalsList((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoal, id: Math.random().toString() },
    ]);

    setModalVisible(false);
  }

  function deleteGoalHandler(id) {
    setGoalsList((currentCourseGoal)=>{
      return currentCourseGoal.filter((goal)=> goal.id !== id);
    })
    console.log("Delete");
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color={"#a065ec"}
        onPress={startAddGoalHandler}
      />
      <GoalInput
        visible={modalVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 4.5,
  },
});
