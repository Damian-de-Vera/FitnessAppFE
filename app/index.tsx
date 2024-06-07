import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import SplashScreen from "@/screens/SplashScreen";
import useAuth from "@/hooks/auth";
import Menu from "@/navigation/MenuNavigation";
import LoginScreen from "@/screens/LoginScreen";

export default function App() {
  const { isAuthenticated } = useAuth();
  const [isSplashScreen, setIsSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashScreen(false);
    }, 3000);
  });

  return isSplashScreen ? (
    <SplashScreen />
  ) : isAuthenticated ? (
    <Menu />
  ) : (
    <LoginScreen />
  );
}

const styles = StyleSheet.create({});
