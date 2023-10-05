import React, { useEffect, useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  Container,
  ContainerAdverts,
  ContainerTitleAndIcon,
  ContainerTitleNumberAndText,
  IconAndAdverts,
  Main,
  Title,
  TitleNumber,
  TitleText,
} from "./styles";
import { Header } from "@components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "@theme/index";
import { InputHome } from "./components/InputHome";
import { FlatList } from "react-native";
import { api } from "@services/api";
import { AdvertsListen } from "@components/AdvertsListen";
import { Modal } from "@components/Modal";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

type ProductImage = {
  path: string;
  id: string;
};

type PropsFlatList = {
  id: string;
  name: string;
  price: number;
  product_images: ProductImage[];
  payment_method: string[];
  user: {
    avatar: string;
  };
  is_new: boolean;
};

type handleFilterProductsProps = {
  checkedTicket?: boolean;
  checkedPix?: boolean;
  checkedMoney?: boolean;
  checkedCard?: boolean;
  checkedBankDeposit?: boolean;
};

export function Home() {
  const [product, setProduct] = useState<PropsFlatList[]>([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [condition, setCondition] = useState("new");
  const [replacement, setReplacement] = useState(false);
  const [checkedTicket, setCheckedTicket] = useState(false);
  const [checkedPix, setCheckedPix] = useState(false);
  const [checkedMoney, setCheckedMoney] = useState(false);
  const [checkedCard, setCheckedCard] = useState(false);
  const [checkedBankDeposit, setCheckedBankDeposit] = useState(false);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  let conditionType = condition === "new" ? true : false;

  const products = async () => {
    try {
      const response = await api.get("/products/");
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterProducts = async ({
    checkedTicket,
    checkedPix,
    checkedMoney,
    checkedCard,
    checkedBankDeposit,
  }: handleFilterProductsProps) => {
    const paymentMethods = {
      ticket: checkedTicket,
      pix: checkedPix,
      money: checkedMoney,
      card: checkedCard,
      bank_deposit: checkedBankDeposit,
    };

    const selectedMethods = Object.keys(paymentMethods)
      .filter((method) => paymentMethods[method as keyof typeof paymentMethods])
      .map((method) => `payment_method=${method}`)
      .join("&");

    setProduct([]);
    const response = await api.get(
      `/products/?is_new=${conditionType}&accept_trade=${replacement}${selectedMethods}`
    );
    setProduct(response.data);
    setOpenModal(false);
  };

  const filteredProducts = product.filter((products) =>
    products.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleRedirectDetailsProducts(id: string) {
    navigation.navigate("detailsProducts", {
      id,
    });
  }

  useEffect(() => {
    products();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Container>
        <Main>
          <Header />
          <Title>Seus produtos anunciados para venda</Title>
          <ContainerAdverts>
            <IconAndAdverts>
              <Feather name="tag" size={22} color={theme.COLORS.BLUE} />
              <ContainerTitleNumberAndText>
                <TitleNumber>4</TitleNumber>
                <TitleText>anúncios ativos</TitleText>
              </ContainerTitleNumberAndText>
            </IconAndAdverts>
            <ContainerTitleAndIcon>
              <TitleText
                style={{
                  color: theme.COLORS.BLUE,
                  marginRight: 8,
                  fontWeight: "700",
                }}
              >
                Meus anúncios
              </TitleText>
              <AntDesign
                name="arrowright"
                size={16}
                color={theme.COLORS.BLUE}
              />
            </ContainerTitleAndIcon>
          </ContainerAdverts>

          <Title>Compre produtos variados</Title>
          <InputHome
            title="Buscar anúncio"
            value={searchProduct}
            onChangeText={(text) => setSearchProduct(text)}
            onPress={handleOpenModal}
          />
          <FlatList
            contentContainerStyle={{
              marginBottom: 24,
            }}
            style={{
              marginTop: 16,
            }}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            data={filteredProducts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }: { item: PropsFlatList }) => (
              <AdvertsListen
                name={item.name}
                price={item.price}
                product_images={item.product_images}
                payment_method={item.payment_method}
                user={item.user}
                is_new={item.is_new}
                onPress={() => handleRedirectDetailsProducts(item.id)}
              />
            )}
          />
          <Modal
            visible={openModal}
            onClose={() => setOpenModal(false)}
            condition={condition}
            setCondition={setCondition}
            replacement={replacement}
            setReplacement={setReplacement}
            checkedTicket={checkedTicket}
            setCheckedTicket={setCheckedTicket}
            checkedPix={checkedPix}
            setCheckedPix={setCheckedPix}
            checkedMoney={checkedMoney}
            setCheckedMoney={setCheckedMoney}
            checkedCard={checkedCard}
            setCheckedCard={setCheckedCard}
            checkedBankDeposit={checkedBankDeposit}
            setCheckedBankDeposit={setCheckedBankDeposit}
            handleFilterProducts={() =>
              handleFilterProducts({
                checkedTicket,
                checkedPix,
                checkedMoney,
                checkedCard,
                checkedBankDeposit,
              })
            }
          />
        </Main>
      </Container>
    </SafeAreaView>
  );
}
