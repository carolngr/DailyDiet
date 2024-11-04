import React from "react";
import { View } from "react-native";
import {
  BackButton,
  HeaderContainer,
  HeaderText,
  SubtitleText,
  TitleText,
} from "./styles";

import Ionicons from "@expo/vector-icons/Ionicons";

const Percentage: React.FC = () => {
  return (
    <HeaderContainer>
      <BackButton onPress={() => console.log("Voltar pressionado")}>
        <Ionicons name="arrow-back" size={24} color="#3B6E2A" />
      </BackButton>
      <HeaderText>
        <TitleText>90,86%</TitleText>
        <SubtitleText>das refeições dentro da dieta</SubtitleText>
      </HeaderText>
    </HeaderContainer>
  );
};

export default Percentage;
