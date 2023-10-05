import React from "react";
import theme from "./src/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";
import { Routes } from "@routes/index";
import { AuthContextProvider } from "@contexts/AuthContext";

export default function App() {
  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        flex: 1,
        backgroundColor: theme.COLORS.GRAY_600,
      }}
    >
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </ThemeProvider>
    </SafeAreaView>
  );
}
