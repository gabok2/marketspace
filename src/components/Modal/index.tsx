import React, { useRef, useState } from "react";

import {
  Modal as ModalProduct,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Background,
  ContainerBackground,
  ContainerCheckbox,
  ContainerFooter,
  ContainerModal,
  ContainerNewAndUsed,
  ContainerReplacement,
  ContainerTitleAndIcon,
  TextDescription,
  Title,
  TitleDescription,
} from "./styles";
import { Feather } from "@expo/vector-icons";
import theme from "@theme/index";
import { Switch } from "@components/Switch";
import { Checkbox } from "@components/Checkbox";
import { Button } from "@components/Button";
import { ScrollView } from "react-native";

interface ModalItensProps {
  visible: boolean;
  onClose: () => void;
  remover?: () => void;
  condition: string;
  setCondition: (value: "new" | "used") => void;
  replacement: boolean;
  setReplacement: (value: boolean) => void;
  checkedTicket: boolean;
  setCheckedTicket: (value: boolean) => void;
  checkedPix: boolean;
  setCheckedPix: (value: boolean) => void;
  checkedMoney: boolean;
  setCheckedMoney: (value: boolean) => void;
  checkedCard: boolean;
  setCheckedCard: (value: boolean) => void;
  checkedBankDeposit: boolean;
  setCheckedBankDeposit: (value: boolean) => void;
  handleFilterProducts: () => void;
}

type toogleCheckboxType = "ticket" | "pix" | "money" | "card" | "bankDeposit";

export function Modal({
  visible,
  onClose,
  condition,
  setCondition,
  setReplacement,
  checkedTicket,
  setCheckedTicket,
  checkedPix,
  setCheckedPix,
  checkedMoney,
  setCheckedMoney,
  checkedCard,
  setCheckedCard,
  checkedBankDeposit,
  setCheckedBankDeposit,
  replacement,
  handleFilterProducts,
}: ModalItensProps) {
  const modalRef = useRef<ModalProduct>(null);

  function handleCloseModal(event: any) {
    if (modalRef.current && event.target === modalRef.current) {
      onClose();
    }
  }

  function handleNewOrUsed(conditionType: string) {
    setCondition(conditionType === "new" ? "new" : "used");
  }

  function toogleSwitch() {
    setReplacement(!replacement);
  }

  function toogleCheckbox(option: toogleCheckboxType) {
    switch (option) {
      case "ticket":
        setCheckedTicket(!checkedTicket);
        break;
      case "pix":
        setCheckedPix(!checkedPix);
        break;
      case "money":
        setCheckedMoney(!checkedMoney);
        break;
      case "card":
        setCheckedCard(!checkedCard);
        break;
      case "bankDeposit":
        setCheckedBankDeposit(!checkedBankDeposit);
        break;
      default:
        break;
    }
  }

  function handleReset() {
    setCheckedTicket(false);
    setCheckedPix(false);
    setCheckedMoney(false);
    setCheckedCard(false);
    setCheckedBankDeposit(false);
    setReplacement(false);
  }

  return (
    <>
      <ModalProduct
        animationType="none"
        transparent
        visible={visible}
        onRequestClose={onClose}
      >
        <TouchableWithoutFeedback onPress={handleCloseModal}>
          <ContainerModal ref={modalRef}>
            <ContainerBackground>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  flexGrow: 1,
                  paddingBottom: 24,
                }}
              >
                <ContainerTitleAndIcon>
                  <Title>Filtrar anúncios</Title>

                  <TouchableOpacity onPress={onClose}>
                    <Feather name="x" size={24} color={theme.COLORS.GRAY_400} />
                  </TouchableOpacity>
                </ContainerTitleAndIcon>
                <TitleDescription>Condição</TitleDescription>

                <ContainerNewAndUsed>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => handleNewOrUsed("new")}
                  >
                    <Background
                      style={{
                        backgroundColor:
                          condition === "new"
                            ? theme.COLORS.BLUE_LIGHT
                            : theme.COLORS.GRAY_500,
                      }}
                    >
                      <TextDescription
                        style={{
                          color:
                            condition === "new"
                              ? theme.COLORS.WHITE
                              : theme.COLORS.GRAY_300,
                        }}
                      >
                        NOVO
                      </TextDescription>
                    </Background>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => handleNewOrUsed("used")}
                  >
                    <Background
                      style={{
                        backgroundColor:
                          condition === "used"
                            ? theme.COLORS.BLUE_LIGHT
                            : theme.COLORS.GRAY_500,
                      }}
                    >
                      <TextDescription
                        style={{
                          color:
                            condition === "used"
                              ? theme.COLORS.WHITE
                              : theme.COLORS.GRAY_300,
                        }}
                      >
                        USADO
                      </TextDescription>
                    </Background>
                  </TouchableOpacity>
                </ContainerNewAndUsed>

                <TitleDescription>Aceita troca?</TitleDescription>

                <ContainerReplacement>
                  <Switch
                    activeOpacity={1}
                    onPress={toogleSwitch}
                    style={{
                      backgroundColor: replacement
                        ? theme.COLORS.BLUE_LIGHT
                        : theme.COLORS.GRAY_500,
                      justifyContent: replacement ? "flex-end" : "flex-start",
                    }}
                  ></Switch>
                </ContainerReplacement>
                <TitleDescription>Meios de pagamento aceitos</TitleDescription>
                <ContainerCheckbox>
                  <Checkbox
                    activeOpacity={1}
                    visibleIcon={checkedTicket ? true : false}
                    text="Boleto"
                    onPress={() => toogleCheckbox("ticket")}
                    style={{
                      backgroundColor: checkedTicket
                        ? theme.COLORS.BLUE_LIGHT
                        : "transparent",
                      borderColor: checkedTicket
                        ? "transparent"
                        : theme.COLORS.GRAY_400,
                    }}
                  />

                  <Checkbox
                    activeOpacity={1}
                    visibleIcon={checkedPix ? true : false}
                    text="Pix"
                    onPress={() => toogleCheckbox("pix")}
                    style={{
                      backgroundColor: checkedPix
                        ? theme.COLORS.BLUE_LIGHT
                        : "transparent",
                      borderColor: checkedPix
                        ? "transparent"
                        : theme.COLORS.GRAY_400,
                    }}
                  />

                  <Checkbox
                    activeOpacity={1}
                    visibleIcon={checkedMoney ? true : false}
                    text="Dinheiro"
                    onPress={() => toogleCheckbox("money")}
                    style={{
                      backgroundColor: checkedMoney
                        ? theme.COLORS.BLUE_LIGHT
                        : "transparent",
                      borderColor: checkedMoney
                        ? "transparent"
                        : theme.COLORS.GRAY_400,
                    }}
                  />

                  <Checkbox
                    activeOpacity={1}
                    visibleIcon={checkedCard ? true : false}
                    text="Cartão de Crédito"
                    onPress={() => toogleCheckbox("card")}
                    style={{
                      backgroundColor: checkedCard
                        ? theme.COLORS.BLUE_LIGHT
                        : "transparent",
                      borderColor: checkedCard
                        ? "transparent"
                        : theme.COLORS.GRAY_400,
                    }}
                  />
                  <Checkbox
                    activeOpacity={1}
                    visibleIcon={checkedBankDeposit ? true : false}
                    text="Depósito Bancário"
                    onPress={() => toogleCheckbox("bankDeposit")}
                    style={{
                      backgroundColor: checkedBankDeposit
                        ? theme.COLORS.BLUE_LIGHT
                        : "transparent",
                      borderColor: checkedBankDeposit
                        ? "transparent"
                        : theme.COLORS.GRAY_400,
                    }}
                  />
                </ContainerCheckbox>
                <ContainerFooter>
                  <Button
                    style={{
                      paddingLeft: 32,
                      paddingRight: 32,
                      backgroundColor: theme.COLORS.GRAY_500,
                    }}
                    icon={false}
                    color={theme.COLORS.RED_LIGHT}
                    titleColor={theme.COLORS.GRAY_200}
                    title="Resetar filtros"
                    onPress={handleReset}
                  />
                  <Button
                    style={{ paddingLeft: 32, paddingRight: 32 }}
                    onPress={handleFilterProducts}
                    icon={false}
                    color={theme.COLORS.GRAY_100}
                    titleColor={theme.COLORS.GRAY_700}
                    title="Aplicar filtros"
                  />
                </ContainerFooter>
              </ScrollView>
            </ContainerBackground>
          </ContainerModal>
        </TouchableWithoutFeedback>
      </ModalProduct>
    </>
  );
}
