import { styled } from "styled-components/native";
import { TextInput } from "react-native";
import theme from "@theme/index";

export const Container = styled.View`
  margin-top: 12px;
  width: 100%;
  height: 45px;
  padding: 0 16px;
  border-radius: 8px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  justify-content: space-between;
  align-items: center;
`;

export const ContainerIconAndDivider = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.View`
  height: 18px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  width: 1px;
  margin: 0px 8px;
`;

export const Input = styled(TextInput).attrs({
  placeholderTextColor: theme.COLORS.GRAY_400,
})`
  flex: 1;

  font-size: 18px;
  font-weight: 400;
`;
