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
      <Card value={"98,08"} description="das refeições dentro da dieta" />
      <Meals>Refeições</Meals>
      <ButtonIcon title="Nova refeição" />
      <DataNow>12.08.22</DataNow>
      <GroupCard />
    </Container>
  );
}
