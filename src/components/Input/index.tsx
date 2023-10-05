import { Container, Input as InputComponent } from "./styles";
import { TextInputProps, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface InputProps extends TextInputProps {
  title: string;
  icon?: boolean;
  secureTextEntryIncon?: boolean;
  onPresssecureTextEntry?: () => void;
}
export function Input({
  title,
  icon,
  secureTextEntryIncon,
  onPresssecureTextEntry,
  ...rest
}: InputProps) {
  return (
    <Container>
      <InputComponent placeholder={title} {...rest} />
      <TouchableOpacity onPress={onPresssecureTextEntry}>
        {icon &&
          (secureTextEntryIncon ? (
            <Ionicons name="eye-outline" size={20} color={"#000000"} />
          ) : (
            <Ionicons name="eye-off-outline" size={20} color={"#000000"} />
          ))}
      </TouchableOpacity>
    </Container>
  );
}
