import { styled } from "styled-components/native";

export const ContainerModal = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
`;

export const ContainerBackground = styled.View`
  padding: 0 24px;

  border-radius: 24px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #fff;
  height: 75%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ContainerTitleAndIcon = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const TitleDescription = styled.Text`
  margin-top: 24px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const ContainerNewAndUsed = styled.View`
  margin-top: 12px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Background = styled.View`
  width: 76px;
  height: 28px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_LIGHT};
  align-items: center;
  justify-content: center;
`;

export const TextDescription = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
`;

export const ContainerReplacement = styled.View`
  margin-top: 12px;
  flex-direction: column;
  align-self: flex-start;
`;

export const ContainerCheckbox = styled.View`
  margin-top: 12px;
  flex-direction: column;
  gap: 14px;
`;

export const ContainerFooter = styled.View`
  margin-top: 54px;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  width: 100%;
`;
