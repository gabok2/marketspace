import { styled } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 153px;
  min-height: 153px;
  border-radius: 6px;
  flex-direction: column;
  margin-right: 10%;
  margin-bottom: 24px;
`;

export const ContainerAvatarAndText = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  padding: 0 4px;
`;

export const Avatar = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.COLORS.WHITE};
`;

export const ContainerText = styled.View`
  width: 50px;
  height: 17px;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 6px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 12px;
  font-weight: 700;
  text-align: center;
`;

export const TitleDescription = styled.Text`
  margin-top: 4px;
  width: 100%;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: 16px;
  font-weight: 400;
  padding: 0 4px;
`;

export const Price = styled.Text`
  padding: 0 4px;
  margin-top: 5px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 15px;
  font-weight: 700;
`;
