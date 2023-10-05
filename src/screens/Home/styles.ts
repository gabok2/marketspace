import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Main = styled.View`
  margin: 0 24px;
  flex: 1;
`;

export const Title = styled.Text`
  margin-top: 32px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const ContainerAdverts = styled.View`
  margin-top: 12px;
  width: 100%;
  flex-direction: row;
  height: 66px;
  background-color: #dfe1ea;
  padding: 16px;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
`;

export const IconAndAdverts = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerTitleNumberAndText = styled.View`
  flex-direction: column;
  margin-left: 16px;
`;

export const TitleNumber = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const TitleText = styled.Text`
  font-size: 12px;
  font-weight: 400;
`;

export const ContainerTitleAndIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;
