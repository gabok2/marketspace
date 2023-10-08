import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";

import { AppRoutes } from "./app.routes";

import { useAuth } from "@hooks/useAuth";
import { useAuthStore } from "../store/index";
import { api } from "@services/api";

export function Routes() {
  const [user, isLoadingUserStorageData, loadUserData, signOut] = useAuthStore(
    (state) => [
      state.user,
      state.isLoadingUserStorageData,
      state.loadUserData,
      state.signOut,
    ]
  );

  useEffect(() => {
    loadUserData();
  }, []);

  useEffect(() => {
    const subscribe = api.registerInterceptTokenManager(signOut);

    return () => {
      subscribe();
    };
  }, [signOut]);
  if (isLoadingUserStorageData) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        {user.id ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </View>
  );
}
