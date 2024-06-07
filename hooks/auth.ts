import { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        console.log("Checking token");

        // Recupera las credenciales almacenadas
        const storedUsername = await SecureStore.getItemAsync("username");
        const storedPassword = await SecureStore.getItemAsync("password");

        if (storedUsername && storedPassword) {
          // Aquí podrías agregar lógica adicional para verificar la validez del token
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error checking token", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkToken();
  }, []);

  const login = async () => {
    try {
      console.log("Logging in");
      await SecureStore.setItemAsync("username", "nombre");
      await SecureStore.setItemAsync("password", "password");
      setIsLoading(false);
    } catch (error) {
      console.error("Error logging in", error);
    }
  };

  const logout = async () => {
    try {
      console.log("Logout");
      await SecureStore.deleteItemAsync("username");
      await SecureStore.deleteItemAsync("password");
      setIsAuthenticated(false);
      setIsLoading(false);
    } catch (error) {
      console.error("Error logging in", error);
    }
  };

  return { isLoading, isAuthenticated, login, logout };
};

export default useAuth;
