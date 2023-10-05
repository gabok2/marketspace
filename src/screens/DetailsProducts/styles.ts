import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Main = styled.View`
  padding: 0 24px;
  flex: 1;
`;

export const ContainerFlatList = styled.View`
  padding-top: 12px;
`;

export const Profile = styled.View`
  padding-top: 25px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const AvatarProfile = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 2px solid ${(props) => props.theme.BLUE_LIGHT};
`;
export const NameProfile = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding-left: 8px;
`;

export const ContainerText = styled.View`
  margin-top: 29px;
  width: 50px;
  height: 17px;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  border-radius: 6px;
`;

export const TitleIsNew = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: 10px;
  font-weight: 700;
  text-align: center;
`;

export const ContainerTitleDescriptionAndPrice = styled.View`
  padding-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const TitlePrice = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.BLUE_LIGHT};
`;

export const ContainerDescription = styled.View`
  padding-top: 10px;
  width: 100%;
  flex-direction: row;
`;

export const TitleDescription = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const PaymentTitle = styled.Text`
  padding-top: 16px;
  font-size: 14px;
  font-weight: 700;
`;

export const ContainerReplacementAndExchanges = styled.View`
  padding-top: 24px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Replacement = styled.Text`
  font-size: 14px;
  font-weight: 700;
`;

export const Exchanges = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const PaymentMethods = styled.View`
  padding-top: 8px;
  flex-direction: column;

  gap: 4px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const PaymentMethodsTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const ContainerFooter = styled.View`
  padding-top: 51px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitlePriceFooter = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const ContainerFooterButton = styled.View``;
