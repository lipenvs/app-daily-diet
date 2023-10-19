import { Feedback } from "@/components/Feedback";
import { Container } from "./styles";
import { Button } from "@/components/Button";

export function ContinueAssim() {
  return (
    <Container>
      <Feedback
        title="Continue assim!"
        subtitle="Você continua dentro da dieta. Muito bem!"
        image={require("assets/icon.png")}
      />
      <Button label="Ir para a página inicial" />
    </Container>
  );
}
