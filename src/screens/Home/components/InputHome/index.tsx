import { TextInputProps, TouchableOpacity } from "react-native";
import { Container, ContainerIconAndDivider, Divider, Input } from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";

interface InputHomeProps extends TextInputProps {
  title: string;
  onPress?: () => void;
}
export function InputHome({ title, onPress, ...rest }: InputHomeProps) {
  return (
    <Container>
      <Input placeholder={title} {...rest} />
      <ContainerIconAndDivider>
        <MaterialCommunityIcons name="magnify" size={22} color="#000000" />
        <Divider />
        <TouchableOpacity onPress={onPress}>
          <Feather name="sliders" size={20} color="#000000" />
        </TouchableOpacity>
      </ContainerIconAndDivider>
    </Container>
  );
}
