import {
  StyleSheet,
  Pressable,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.header_text}>Bank app</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.login_container}>
          <Text>Welcome!</Text>
          <View style={styles.login}>
            {/* <TextInput placeholder="Enter your username"></TextInput>
            <TextInput placeholder="Enter your password"></TextInput> */}
            <Pressable style={styles.login_button}>
              <Text style={styles.login_text}>Login</Text>
            </Pressable>
            <Pressable style={styles.signup_button}>
              <Text style={styles.signup_text}>Signup</Text>
            </Pressable>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    margin: "auto",
    textAlign: "center",
    justifyContent: "center",
    width: 100,
  },
  header_text: {
    color: "red",
    fontSize: 20,
  },
  login_container: {
    margin: 20,
  },
  login_button: {
    backgroundColor: "transparent",
    padding: 20,
    borderWidth: 1,
    width: 300,
  },
  login_text: {
    fontSize: 20,
    textAlign: "center",
  },
  signup_button: {
    backgroundColor: "black",
    padding: 20,
    borderWidth: 1,
    width: 300,
    marginTop: 20,
  },
  signup_text: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
  },
});
