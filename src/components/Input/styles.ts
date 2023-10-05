import { styled } from "styled-components/native";
import { TextInput } from "react-native";
import theme from "@theme/index";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  height: 45px;
  padding: 0 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  justify-content: space-between;
`;

export const Input = styled(TextInput).attrs({
  placeholderTextColor: theme.COLORS.GRAY_400,
})`
  flex: 1;

  font-size: 18px;
  font-weight: 400;
`;
