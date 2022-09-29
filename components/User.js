import { View, Text, Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const User = ({ name, email, website, phone, navigation }) => {
  const pressHandler = () => {
    navigation.navigate("UserOverview", {
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
        <Text style={styles.userHeading}>{name}</Text>

        <View style={styles.icon}>
          <AntDesign name="user" size={24} color="black" />
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.userText}>{email}</Text>
          <Text style={styles.userText}>{phone}</Text>
          <Text style={styles.userText}>{website}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default User;

const styles = StyleSheet.create({
  users: {
    margin: 20,
    padding: 12,
    height: 190,
    backgroundColor: "#ffcdb2",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    alignItems: "center",
  },
  userHeading: {
    color: "#fff",
    fontSize: 20,
  },
  icon: {
    marginVertical: 16,
  },
  userInfo: {
    height: 75,
    justifyContent: "space-between",
    alignSelf: "flex-start",
  },
  userText: {
    fontSize: 12,
  },
  pressableButton: {
    flex: 1,
    width: "70%",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
