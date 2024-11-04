import React from "react";
import { Container, Body, BodyTitle, CardRow } from "./styles";

import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";
import { Card } from "@components/Card";
import { Header } from "@components/Header";

const Estatisticas: React.FC = () => {
  return (
    <Container>
      <Header.Percentage />

      <Body>
        <BodyTitle>Estatísticas gerais</BodyTitle>

        <Card
          title="22"
          description="melhor sequência de pratos dentro da dieta"
          bgColor="#EFF0F0"
        />

        <Card
          title="109"
          description="refeições registradas"
          bgColor="#EFF0F0"
        />

        <CardRow>
          <Card
            title="99"
            description="refeições dentro da dieta"
            bgColor="#E5F0DB"
          />
          <Card
            title="10"
            description="refeições fora da dieta"
            bgColor="#F4E6E7"
          />
        </CardRow>
      </Body>
    </Container>
  );
};

export default Estatisticas;
