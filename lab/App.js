import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <view style={myHeader.container}>
        <Text>AI prototype in mobile development.</Text>
      </view>
      <View></View>
    </View>
  );
}

const myHeader = StyleSheet.create({
  container: {
    fontSize: 36,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "right",
  },
});
