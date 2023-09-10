import { CircleIcon, Container, Divider, MealName, Time } from "./styles";

type Props = {
  isOk: boolean;
  mealName: string;
  time: string;
};

export function Meal({ isOk, mealName, time }: Props) {
  return (
    <Container>
      <Time>{time}</Time>
      <Divider />
      <MealName>{mealName}</MealName>
      <CircleIcon isOk={isOk} />
    </Container>
  );
}
