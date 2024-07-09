import { View, Image } from "react-native";

import logoImg from "@assets/logo.png";
import Ellipse from "@assets/Ellipse.png";

import { BackButton, Container, Logo, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />

      <BackButton>
        <Profile source={Ellipse} />
      </BackButton>
    </Container>
  );
}
