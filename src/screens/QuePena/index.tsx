import { Feedback } from "@/components/Feedback";
import { Container } from "./styles";
import { Button } from "@/components/Button";

export function QuePena() {
  return (
    <Container>
      <Feedback
        color={"RED_DARK"}
        title="Que pena!"
        subtitle="Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"
        image={require("@/assets/quepena.png")}
      />

      <Button label="Ir para a página inicial" />
    </Container>
  );
}
