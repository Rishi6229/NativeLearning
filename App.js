import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textProp}>Hello World !!</Text>
      <Text style={styles.textProp}>Another piece of text !!</Text>
      <Button title="kick ass" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "center",
  },

  textProp: {
    margin: 1,
    borderWidth: 2,
    borderColor: "red",
    padding: 10,
  },
});
