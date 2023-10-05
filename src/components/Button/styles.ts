import { styled } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  padding: 12px 12px;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding-left: 8px;
`;
