import { Container } from "./styles";

import { ProfileHeader } from "@/components/ProfileHeader";
import { PorcentageCard } from "@/components/PercentageCard";
import { MealList } from "@/components/MealList";

export function Home() {
  return (
    <Container>
      <ProfileHeader />

      <PorcentageCard
        currentPorcentage={95.4}
        subtitle="das refeições dentro da dieta"
        style={{ marginTop: 32 }}
      />

      <MealList />
    </Container>
  );
}
