import { Container, Description, IconUp, Title } from "./styles";

type Props = {
  title: string;
  description: string;
  Icon?: boolean;
  bgColor: string;
};

export function Card({ title, description, Icon, bgColor }: Props) {
  return (
    <Container bgColor={bgColor}>
      {Icon ? <IconUp /> : <></>}
      <Title>{title}%</Title>
      <Description>{description}</Description>
    </Container>
  );
}
