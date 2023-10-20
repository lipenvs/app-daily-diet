import { ArrowLeft } from "phosphor-react-native";
import { BackButton, Container, Title } from "./styles";

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  return (
    <Container>
      <BackButton>
        <ArrowLeft />
      </BackButton>
      <Title>{title}</Title>
    </Container>
  );
}
