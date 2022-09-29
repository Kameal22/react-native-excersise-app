import { View, Text } from "react-native";

const UserOvierview = ({ route }) => {
  const userName = route.params.userName;

  return (
    <View>
      <Text>{userName}</Text>
    </View>
  );
};

export default UserOvierview;
