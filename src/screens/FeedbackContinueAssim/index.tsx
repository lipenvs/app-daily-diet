import { Container } from "./styles";
import { Feedback } from "@/components/Feedback";
import { Button } from "@/components/Button";
import { useNavigation } from "@react-navigation/native";

export function FeedbackContinueAssim() {
  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <Feedback
        color={"GREEN_DARK"}
        title="Continue assim!"
        subtitle="Você continua dentro da dieta. Muito bem!"
        image={require("@/assets/continue.png")}
      />
      <Button label="Ir para a página inicial" onPress={handleHome} />
    </Container>
  );
}
