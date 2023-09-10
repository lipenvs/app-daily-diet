import { Container, Title } from "./styles";

import { ProfileHeader } from "@/components/ProfileHeader";
import { PorcentageCard } from "@/components/PercentageCard";
import { Button } from "@/components/Button";
import { DailyMeals } from "@/components/DailyMeals";

export function Home() {
  return (
    <Container>
      <ProfileHeader />

      <PorcentageCard
        currentPorcentage={95.4}
        subtitle="das refeições dentro da dieta"
        style={{ marginTop: 32 }}
      />

      <Title>Refeições</Title>
      <Button iconName="add" text="Nova refeição" />

      <DailyMeals />
      <DailyMeals />
    </Container>
  );
}
