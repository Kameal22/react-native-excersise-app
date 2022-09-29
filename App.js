import { StyleSheet, SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserOvierview from "./screens/UserOverview";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.rootContainer}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home Page" component={HomeScreen} />
            <Stack.Screen name="User overview" component={UserOvierview} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#333533",
  },
});
