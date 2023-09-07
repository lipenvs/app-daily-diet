import { Container, Logo, Profile } from "./styles";
import LogoImage from "@/assets/Logo.png";
import ProfileImage from "@/assets/Ellipse.png";

export function ProfileHeader() {
  return (
    <Container>
      <Logo source={LogoImage} />
      <Profile source={ProfileImage} />
    </Container>
  );
}
