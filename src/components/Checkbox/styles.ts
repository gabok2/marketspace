import { styled } from "styled-components/native";

export const Container = styled.View`
  min-width: 100px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Check = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;
