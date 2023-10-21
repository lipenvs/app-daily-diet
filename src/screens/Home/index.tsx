import { Container, Title } from "./styles";

import { ProfileHeader } from "@/components/ProfileHeader";
import { PorcentageCard } from "@/components/PercentageCard";
import { Button } from "@/components/Button";
import { DailyMeals, MealDateTime } from "@/components/DailyMeals";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

type DailyMeals = {
  date: string;
  meals: MealDateTime[];
};

export function Home() {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const [dailyMeals, setDailyMeals] = useState<DailyMeals[]>([]);

  const navigation = useNavigation();

  function handleNewMeal() {
    navigation.navigate("novaRefeicao");
  }

  return (
    <Container>
      <ProfileHeader />

      <PorcentageCard
        currentPercentage={currentPercentage}
        subtitle="das refeições dentro da dieta"
        style={{ marginTop: 32 }}
      />

      <Title>Refeições</Title>
      <Button iconName="add" label="Nova refeição" onPress={handleNewMeal} />

      {dailyMeals.map((mealsDaily) => (
        <DailyMeals date={mealsDaily.date} meals={mealsDaily.meals} />
      ))}
    </Container>
  );
}
