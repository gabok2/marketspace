import React from "react";
import { ImageBackground } from "react-native";
import {
  Avatar,
  Container,
  ContainerAvatarAndText,
  ContainerText,
  Price,
  Title,
  TitleDescription,
} from "./styles";
import { api } from "@services/api";
import { FormatPrice } from "@utils/formatPice";
import theme from "@theme/index";

type ProductImage = {
  path: string;
  id: string;
};
type Props = {
  onPress?: () => void;
  name?: string;
  price: number;
  is_new?: boolean;
  accept_trades?: boolean;
  product_images: ProductImage[];
  payment_method?: string[];
  user: {
    avatar: string;
  };
};

export function AdvertsListen({
  onPress,
  accept_trades,
  name,
  price,
  product_images,
  payment_method,
  user,
  is_new,
}: Props) {
  return (
    <Container onPress={onPress}>
      {product_images[0] && (
        <ImageBackground
          borderRadius={6}
          resizeMode="cover"
          source={{
            uri: `${api.defaults.baseURL}/images/${product_images[0].path}`,
          }}
          style={{ width: 153, height: 100 }}
        >
          <ContainerAvatarAndText>
            <Avatar
              source={{ uri: `${api.defaults.baseURL}/images/${user.avatar}` }}
            />
            <ContainerText
              style={{
                backgroundColor: is_new
                  ? theme.COLORS.BLUE
                  : theme.COLORS.GRAY_200,
              }}
            >
              <Title>{is_new ? "NOVO" : "USADO"}</Title>
            </ContainerText>
          </ContainerAvatarAndText>
        </ImageBackground>
      )}
      <TitleDescription>{name}</TitleDescription>
      <Price>{FormatPrice(price)}</Price>
    </Container>
  );
}
