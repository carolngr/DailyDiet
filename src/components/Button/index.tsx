import { Container, Title, IconButton } from "./styles";

type Props = {
  title: string;
};

export function ButtonIcon({ title }: Props) {
  return (
    <Container>
      <IconButton />
      <Title>{title}</Title>
    </Container>
  );
}
