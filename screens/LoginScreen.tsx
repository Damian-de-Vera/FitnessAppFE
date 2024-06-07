import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import * as WebBroser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBroser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: process.env.EXPO_PUBLIC_OAUTH_ANDROID,
    webClientId: process.env.EXPO_PUBLIC_OAUTH_WEB,
  });

  const handleLoginPress = () => {
    promptAsync();
  };
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button title="Login with Google" onPress={handleLoginPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
