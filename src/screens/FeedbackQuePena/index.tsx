import { Feedback } from "@/components/Feedback";
import { Container } from "./styles";
import { Button } from "@/components/Button";
import { useNavigation } from "@react-navigation/native";

export function FeedbackQuePena() {
  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <Feedback
        color={"RED_DARK"}
        title="Que pena!"
        subtitle="Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"
        image={require("@/assets/quepena.png")}
      />

      <Button label="Ir para a página inicial" onPress={handleHome} />
    </Container>
  );
}
