import { ListItem } from "../ListItem";
import { Container, Title } from "./styles";

export function DailyMeals() {
  return (
    <Container>
      <Title>20/04/2021</Title>

      <ListItem mealName="X-Tudo" isOk time="20:00" />
      <ListItem mealName="X-Tudo" isOk time="20:00" />
    </Container>
  );
}
