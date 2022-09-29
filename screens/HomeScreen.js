import { View, StyleSheet, ScrollView } from "react-native";
import User from "../components/User";
import { users } from "../data/users";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        {users.map((user) => (
          <User name={user.name} key={user.name} navigation={navigation} />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 24,
    marginHorizontal: 24,
    alignItems: "center",
  },
  users: {
    margin: 20,
    backgroundColor: "#ffcdb2",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    alignItems: "center",
  },
  userText: {
    color: "#fff",
    padding: 35,
  },
  pressableButton: {
    flex: 1,
    width: "70%",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
