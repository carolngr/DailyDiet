import { View, Text } from "react-native";

import { Header } from "@components/Header";
import { Container, DataNow, Meals } from "./styles";
import { Card } from "@components/Card";
import { ButtonIcon } from "@components/Button";
import { GroupCard } from "@components/GroupCard";

export default function Home() {
  return (
    <Container>
      <Header.Profile />
      <Card />
      <Meals>Refeições</Meals>
      <ButtonIcon />
      <DataNow>12.08.22</DataNow>
      <GroupCard />
    </Container>
  );
}
