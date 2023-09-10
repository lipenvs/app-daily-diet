import { Meal } from "../Meal";
import { Container, Title } from "./styles";

export function DailyMeals() {
  return (
    <Container>
      <Title>20/04/2021</Title>

      <Meal mealName="X-Tudo" isOk time="20:00" />
      <Meal mealName="X-Tudo" isOk time="20:00" />
    </Container>
  );
}
