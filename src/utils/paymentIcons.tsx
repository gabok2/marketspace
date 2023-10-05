import theme from "@theme/index";
import {
  Bank,
  Barcode,
  CreditCard,
  Money,
  QrCode,
} from "phosphor-react-native";

type Props = {
  name: "boleto" | "pix" | "cash" | "card" | "deposit";
};

export function PaymentMethodsIcons({ name }: Props) {
  switch (name) {
    case "deposit":
      return <Bank size={24} color={theme.COLORS.GRAY_100} />;
    case "boleto":
      return <Barcode size={24} color={theme.COLORS.GRAY_100} />;
    case "card":
      return <CreditCard size={24} color={theme.COLORS.GRAY_100} />;
    case "cash":
      return <Money size={24} color={theme.COLORS.GRAY_100} />;
    case "pix":
      return <QrCode size={24} color={theme.COLORS.GRAY_100} />;
    default:
      return <Money size={24} color={theme.COLORS.GRAY_100} />;
  }
}
