import { Button } from "../Button";
import { Container, Title } from "./styles";

export function MealList() {
  return (
    <Container>
      <Title>Refeições</Title>
      <Button iconName="add" text="Nova refeição" />
    </Container>
  );
}
