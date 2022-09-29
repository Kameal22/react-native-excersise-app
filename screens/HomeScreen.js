import { View, StyleSheet, ScrollView } from "react-native";
import User from "../components/User";
import { useEffect, useState } from "react";
import { fetchUsers } from "../utills/fetchUsers";
import Loading from "../components/Loading";

const HomeScreen = ({ navigation }) => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetchUsers(setUsers);
  }, []);

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        {users ? (
          users.map((user) => (
            <User
              name={user.name}
              key={user.id}
              email={user.email}
              website={user.website}
              phone={user.phone}
              navigation={navigation}
            />
          ))
        ) : (
          <Loading />
        )}
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
});
