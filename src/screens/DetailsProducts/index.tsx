import theme from "@theme/index";
import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { api } from "@services/api";

import { AntDesign } from "@expo/vector-icons";
import { PaymentMethodsIcons } from "@utils/paymentIcons";
import { Button } from "@components/Button";
import {
  Container,
  ContainerFlatList,
  Main,
  Profile,
  AvatarProfile,
  NameProfile,
  ContainerText,
  TitleIsNew,
  ContainerTitleDescriptionAndPrice,
  Title,
  TitlePrice,
  ContainerDescription,
  TitleDescription,
  ContainerReplacementAndExchanges,
  Replacement,
  Exchanges,
  PaymentTitle,
  PaymentMethods,
  ContainerRow,
  PaymentMethodsTitle,
  ContainerFooter,
  TitlePriceFooter,
  ContainerFooterButton,
} from "./styles";
import { FormatPrice } from "@utils/formatPice";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { CarouselImagens } from "./components/CarouselImagens";

type ProductImage = {
  path: string;
  id: string;
};

type PropsPaymentMethods = {
  key: "boleto" | "pix" | "cash" | "card" | "deposit";
  name: string;
};

type PropsDetails = {
  id: string;
  name: string;
  description: string;
  price: number;
  product_images: ProductImage[];
  payment_methods: PropsPaymentMethods[];
  user: {
    avatar: string;
    name: string;
    tel: string;
  };
  is_new: boolean;
  accept_trade: boolean;
};

type RouteParams = {
  route: {
    params: {
      id: string;
    };
  };
};

export function DetailsProducts({ route }: RouteParams) {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [detailsProduct, setDetailsProduct] = useState<PropsDetails>();
  const [isLoading, setIsLoading] = useState(false);

  const { id } = route.params;

  function handleGoBack() {
    navigation.goBack();
  }

  async function loadDetailsProducts() {
    try {
      setIsLoading(true);
      await api.get<PropsDetails>(`/products/${id}`).then((response) => {
        setDetailsProduct(response.data);
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadDetailsProducts();
  }, []);

  console.log("detailsProduct", detailsProduct);

  return (
    <>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        detailsProduct && (
          <Container>
            <AntDesign
              onPress={handleGoBack}
              style={{ marginTop: 20, width: 24, marginLeft: 24 }}
              name="arrowleft"
              size={24}
              color={theme.COLORS.GRAY_100}
            />

            <ContainerFlatList>
              <CarouselImagens
                product_images={detailsProduct?.product_images}
              />
            </ContainerFlatList>
            <Main>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingBottom: 24,
                  flexGrow: 1,
                }}
              >
                <Profile>
                  <AvatarProfile
                    source={{
                      uri: `${api.defaults.baseURL}/images/${detailsProduct?.user.avatar}`,
                    }}
                  ></AvatarProfile>
                  <NameProfile>{detailsProduct?.user.name}</NameProfile>
                </Profile>
                <ContainerText
                  style={{
                    backgroundColor: theme.COLORS.GRAY_500,
                  }}
                >
                  <TitleIsNew>
                    {detailsProduct?.is_new ? "NOVO" : "USADO"}
                  </TitleIsNew>
                </ContainerText>
                <ContainerTitleDescriptionAndPrice>
                  <Title>{detailsProduct?.name}</Title>
                  <TitlePrice>{FormatPrice(detailsProduct.price)}</TitlePrice>
                </ContainerTitleDescriptionAndPrice>
                <ContainerDescription>
                  <TitleDescription>
                    {detailsProduct?.description}
                  </TitleDescription>
                </ContainerDescription>
                <ContainerReplacementAndExchanges>
                  <Replacement> Aceita troca?</Replacement>
                  <Exchanges>
                    {detailsProduct?.accept_trade ? "Sim" : "Não"}
                  </Exchanges>
                </ContainerReplacementAndExchanges>
                <PaymentTitle>Meios de pagamento:</PaymentTitle>
                <PaymentMethods>
                  {detailsProduct?.payment_methods?.map((item) => (
                    <ContainerRow key={item.key}>
                      <PaymentMethodsIcons
                        name={item.key}
                      ></PaymentMethodsIcons>

                      <PaymentMethodsTitle>{item.name}</PaymentMethodsTitle>
                    </ContainerRow>
                  ))}
                </PaymentMethods>
                <ContainerFooter>
                  <TitlePriceFooter>
                    {FormatPrice(detailsProduct.price)}
                  </TitlePriceFooter>
                  <ContainerFooterButton>
                    <Button
                      iconWhatsapp
                      title="Entrar em contato"
                      titleColor="#ffff"
                      color={theme.COLORS.BLUE_LIGHT}
                    />
                  </ContainerFooterButton>
                </ContainerFooter>
              </ScrollView>
            </Main>
          </Container>
        )
      )}
    </>
  );
}

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    position: "absolute",
    bottom: 2,
    alignSelf: "flex-start",
  },
  dot: {
    width: 100,
    height: 5,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});
