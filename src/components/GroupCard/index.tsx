import { View, Text } from "react-native";
import { Container, Hour, Separator, Status, Title } from "./styles";

export function GroupCard() {
  return (
    <Container>
      <Hour>20:00</Hour>
      <Separator>|</Separator>
      <Title>X-tudo</Title>
      <Status />
    </Container>
  );
}
