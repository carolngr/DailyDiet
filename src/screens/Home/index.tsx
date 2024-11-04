import { View, Text } from "react-native";

import { Header } from "@components/Header";
import { Container, Meals } from "./styles";
import { Card } from "@components/Card";
import { ButtonIcon } from "@components/Button";
import { GroupCard } from "@components/GroupCard";

export default function Home() {
  return (
    <Container>
      <Header.Profile />
      <Card
        title={"98,08"}
        description="das refeições dentro da dieta"
        bgColor="#E5F0DB"
        Icon
      />
      <Meals>Refeições</Meals>
      <ButtonIcon title="Nova refeição" />
      <GroupCard />
    </Container>
  );
}
