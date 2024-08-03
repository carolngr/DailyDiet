import { Container, Description, IconUp, Title } from "./styles";

type Props = {
  value: string;
  description: string;
};

export function Card({ value, description }: Props) {
  return (
    <Container>
      <IconUp />
      <Title>{value}%</Title>
      <Description>{description}</Description>
    </Container>
  );
}
