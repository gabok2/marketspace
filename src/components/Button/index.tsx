import { WhatsappLogo } from "phosphor-react-native";
import { Container, Title } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import theme from "@theme/index";
import { TouchableOpacityProps } from "react-native";

interface ButtonProp extends TouchableOpacityProps {
  title: string;
  color?: string;
  titleColor?: string;
  icon?: boolean;
  onPress?: () => void;
  iconWhatsapp?: boolean;
}
export function Button({
  titleColor,
  color,
  title,
  icon,
  onPress,
  iconWhatsapp,
  ...rest
}: ButtonProp) {
  return (
    <Container onPress={onPress} style={{ backgroundColor: color }} {...rest}>
      {icon && <AntDesign name="plus" size={16} color={theme.COLORS.WHITE} />}
      {iconWhatsapp && (
        <WhatsappLogo size={16} color={theme.COLORS.GRAY_600} weight="fill" />
      )}
      <Title style={{ color: titleColor }}>{title}</Title>
    </Container>
  );
}
