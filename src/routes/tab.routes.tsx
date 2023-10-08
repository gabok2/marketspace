import React from "react";
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import theme from "@theme/index";

import { useDispatch } from "react-redux";
import { Home } from "@screens/Home";
import { Adverts } from "@screens/Adverts";
import { useAuth } from "@hooks/useAuth";
import { useAuthStore } from "../store/index";

type BottomTabRoutes = {
  Home: undefined;
  Adverts: undefined;
  Logout: undefined;
};

export type TabNavigatorRoutesProps = BottomTabNavigationProp<BottomTabRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<BottomTabRoutes>();

export function TabRoutes() {
  const signOut = useAuthStore((state) => state.signOut);
  function handleLogout() {
    signOut();
  }

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: theme.COLORS.GRAY_500,
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="Adverts"
        component={Adverts}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="tago" size={24} color={color} />
          ),
        }}
      />

      <Screen
        name="Logout"
        listeners={{
          tabPress: (e) => {
            e.preventDefault();

            handleLogout();
          },
        }}
        component={Adverts}
        options={{
          tabBarIcon: () => (
            <Octicons
              name="sign-out"
              size={24}
              color={theme.COLORS.RED_LIGHT}
            />
          ),
        }}
      />
    </Navigator>
  );
}
