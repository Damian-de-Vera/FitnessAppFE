import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function SplashScreen() {

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/splash.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
