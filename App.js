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
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#333533" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#333533" },
            }}
          >
            <Stack.Screen
              name="HomePage"
              options={{
                title: "Home page",
              }}
              component={HomeScreen}
            />
            <Stack.Screen
              name="UserOverview"
              options={{
                title: "User",
              }}
              component={UserOvierview}
            />
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
