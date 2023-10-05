import { styled } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 50px;
  height: 28px;
  border-radius: 15px;
  align-items: center;
  flex-direction: row;

  padding: 0 3px;
`;

export const Inner = styled.View`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 999px;
`;
