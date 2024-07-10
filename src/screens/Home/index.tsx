import { Header } from "@components/Header";
import { Text, View } from "react-native";
import { Container } from "./styles";
import { Card } from "@components/Card";

export default function Home() {
  return (
    <Container>
      <Header.Profile />
      <Card />
    </Container>
  );
}
