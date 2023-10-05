import { styled } from "styled-components/native";
import theme from "@theme/index";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.COLORS.WHITE};

  align-items: center;
`;

export const Main = styled.View`
  padding: 0 48px;
  background-color: ${theme.COLORS.GRAY_600};
  height: 556px;
  width: 100%;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  align-items: center;
`;

export const LogoImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  margin-top: 65px;
  width: 100%;
`;

export const Title = styled.Text`
  margin-top: 15px;
  font-size: 32px;
  font-weight: 700;
  color: ${theme.COLORS.GRAY_100};
`;

export const Subtitle = styled.Text`
  margin-top: 2px;
  font-size: 14px;
  font-weight: 400;
  color: ${theme.COLORS.GRAY_300};
`;

export const ContainerForm = styled.View`
  margin-top: 65px;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const TitleForm = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${theme.COLORS.GRAY_300};
`;

export const ButtonForm = styled.View`
  margin-top: 12px;
  width: 100%;
`;

export const ContainerFooter = styled.View`
  padding: 0 48px;
  margin-top: 56px;
  align-items: center;
  width: 100%;
`;

export const ButtonFooter = styled.View`
  margin-top: 16px;
  width: 100%;
  padding-bottom: 50px;
`;
