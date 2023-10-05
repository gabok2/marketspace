import React from "react";
import { ScrollView } from "react-native";
import { Container, Main } from "./styles";

export function Register() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={{
        flex: 1,
      }}
      keyboardShouldPersistTaps="handled"
    >
      <Container></Container>;
    </ScrollView>
  );
}
