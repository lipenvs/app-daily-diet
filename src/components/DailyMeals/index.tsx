import { ListItem } from "../ListItem";
import { Container, Title } from "./styles";

export type MealDateTime = {
  time: string;
  description: string;
};

type Props = {
  date: string;
  meals: MealDateTime[];
};

export function DailyMeals({ date, meals }: Props) {
  return (
    <Container>
      <Title>{date}</Title>

      {meals.map((meal) => (
        <ListItem mealName={meal.description} isOk time={meal.time} />
      ))}
    </Container>
  );
}
