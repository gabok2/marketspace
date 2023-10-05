import React from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import { Container, Check, Text } from "./styles";

interface CheckboxProps extends TouchableOpacityProps {
  text: string;
  visibleIcon?: boolean;
}
export function Checkbox({ text, visibleIcon, ...rest }: CheckboxProps) {
  return (
    <Container>
      <Check {...rest}>
        {visibleIcon && <Feather name="check" size={16} color="#fff" />}
      </Check>
      <Text>{text}</Text>
    </Container>
  );
}
