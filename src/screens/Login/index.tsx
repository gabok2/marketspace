import React, { useState } from "react";
import {
  ButtonFooter,
  ButtonForm,
  Container,
  ContainerFooter,
  ContainerForm,
  LogoImage,
  Main,
  Subtitle,
  Title,
  TitleForm,
} from "./styles";
import Logo from "../../assets/logo.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import theme from "@theme/index";
import { ActivityIndicator, ScrollView } from "react-native";
import { Keyboard, Alert } from "react-native";

import { useAuthStore } from "../../store/index";

type SubmitProps = {
  email: string;
  password: string;
};

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntryIncon, setSecureTextEntryIncon] = useState(true);

  const singIn = useAuthStore((state) => state.singIn);

  async function onSubmit({ email, password }: SubmitProps) {
    try {
      setIsLoading(true);
      await singIn(email, password);
    } catch (error) {
      Alert.alert("Ops, algo deu errado");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        style={{
          flex: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <Container>
          <Main>
            <LogoImage source={Logo} />
            <Title>marketspace</Title>
            <Subtitle>Seu espaço de compra e venda</Subtitle>
            <ContainerForm>
              <TitleForm>Acesse sua conta</TitleForm>
              <Input
                title="E-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
              <Input
                icon={true}
                title="Senha"
                secureTextEntry={secureTextEntryIncon}
                onPresssecureTextEntry={() =>
                  setSecureTextEntryIncon(!secureTextEntryIncon)
                }
                secureTextEntryIncon={secureTextEntryIncon}
                value={password}
                onChangeText={setPassword}
              />
              <ButtonForm>
                <Button
                  onPress={() => {
                    onSubmit({ email, password });
                    Keyboard.dismiss(); // Fechar o teclado manualmente
                  }}
                  icon={false}
                  titleColor="#ffff"
                  title="Entrar"
                  color={theme.COLORS.BLUE_LIGHT}
                />
              </ButtonForm>
            </ContainerForm>
          </Main>
          <ContainerFooter>
            <TitleForm>Ainda não tem acesso?</TitleForm>
            <ButtonFooter>
              <Button
                icon={false}
                titleColor={theme.COLORS.GRAY_200}
                title="Criar uma conta"
                color={theme.COLORS.GRAY_500}
              />
            </ButtonFooter>
          </ContainerFooter>
        </Container>
      </ScrollView>
    </>
  );
}
