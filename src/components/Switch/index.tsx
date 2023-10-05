import { Container, Inner } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface SwitchProps extends TouchableOpacityProps {
  onPress: () => void;
}
export function Switch({ onPress, ...rest }: SwitchProps) {
  return (
    <Container onPress={onPress} {...rest}>
      <Inner />
    </Container>
  );
}
