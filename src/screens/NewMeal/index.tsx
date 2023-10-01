import { Input } from "@/components/Input";
import { Container } from "./styles";

export function NewMeal() {
  return (
    <Container>
      <Input label="Nome" />

      <Input
        label="Descrição"
        multiline
        numberOfLines={4}
        style={{ textAlignVertical: "top" }}
      />
    </Container>
  );
}
