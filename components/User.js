import { View, Text, Pressable, StyleSheet } from "react-native";

const User = ({ name, navigation }) => {
  const pressHandler = () => {
    navigation.navigate("User overview", {
      userName: name,
    });
  };

  return (
    <Pressable
      key={name}
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [
        styles.pressableButton,
        pressed ? styles.buttonPressed : null,
      ]}
      onPress={pressHandler}
    >
      <View style={styles.users}>
        <Text style={styles.userText}>{name}</Text>
      </View>
    </Pressable>
  );
};

export default User;

const styles = StyleSheet.create({
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
