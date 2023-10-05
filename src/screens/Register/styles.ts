import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  align-items: center;
`;
export const Main = styled.View`
  padding: 0 48px;
  width: 100%;
  align-items: center;
`;
