import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import useAuth from "../hooks/auth";

export default function HomeScreen() {
  const { logout } = useAuth();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({});
