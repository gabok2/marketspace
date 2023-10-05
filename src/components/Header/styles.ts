import { styled } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ContainerAvatarAndTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 45px;
  height: 45px;
  border-radius: 999px;
  border: 2px solid ${(props) => props.theme.BLUE_LIGHT};
`;

export const GroupTitle = styled.View`
  margin-left: 8px;
  flex-direction: column;
`;

export const ProfileTitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  line-height: 24px;
`;

export const ProfileSubTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  line-height: 24px;
`;
