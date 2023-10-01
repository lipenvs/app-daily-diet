import { TextInputProps } from "react-native";
import { Container, InputBox, Label } from "./styles";

type Props = TextInputProps & {
  label?: string;
};

export function Input({ label, ...rest }: Props) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputBox {...rest} />
    </Container>
  );
}
