import { View, Text, StyleSheet } from "react-native";

const Loading = () => {
  return (
    <View style={styles.loading}>
      <Text style={styles.loadingText}>LOADING DATA</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: "#fff",
    fontSize: 36,
  },
});
