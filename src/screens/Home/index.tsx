import { ProfileHeader } from "@/components/ProfileHeader";

import { Container } from "./styles";
import { PorcentageCard } from "@/components/PercentageCard";

export function Home() {
  return (
    <Container>
      <ProfileHeader />

      <PorcentageCard
        currentPorcentage={95.4}
        subtitle="das refeições dentro da dieta"
        style={{ marginTop: 32 }}
      />
    </Container>
  );
}
