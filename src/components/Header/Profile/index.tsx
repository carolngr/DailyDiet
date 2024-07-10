import logoImg from "@assets/logo.png";
import Ellipse from "@assets/Ellipse.png";

import { ProfileButton, Container, Logo, ProfileImage } from "./styles";

export function Profile() {
  return (
    <Container>
      <Logo source={logoImg} />

      <ProfileButton>
        <ProfileImage source={Ellipse} />
      </ProfileButton>
    </Container>
  );
}
