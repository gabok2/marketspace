import {
  Avatar,
  Container,
  ProfileSubTitle,
  ProfileTitle,
  GroupTitle,
  ContainerAvatarAndTitle,
} from "./styles";
import { Button } from "@components/Button";
import theme from "@theme/index";
import { api } from "@services/api";
import { useAuth } from "@hooks/useAuth";

export function Header() {
  const { user } = useAuth();

  return (
    <>
      {user && (
        <Container>
          <ContainerAvatarAndTitle>
            <Avatar
              source={{ uri: `${api.defaults.baseURL}/images/${user.avatar}` }}
            />
            <GroupTitle>
              <ProfileTitle>Boas vindas,</ProfileTitle>
              <ProfileSubTitle>{user.name}!</ProfileSubTitle>
            </GroupTitle>
          </ContainerAvatarAndTitle>
          <Button
            icon={true}
            titleColor="#ffff"
            title="Criar anúncio"
            color={theme.COLORS.GRAY_100}
          />
        </Container>
      )}
    </>
  );
}
