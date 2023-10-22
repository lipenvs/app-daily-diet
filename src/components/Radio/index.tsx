import { myTheme } from "@/theme";
import { CircleIcon, Container, Label, Option, Row } from "./styles";

export type RadioOptions = "Sim" | "Não";

type Props = {
  optionSelected: RadioOptions;
  handleOptionClick: (value: RadioOptions) => void;
};

export function Radio({ optionSelected, handleOptionClick }: Props) {
  return (
    <Container>
      <Label>Está dentro da dieta?</Label>

      <Row>
        <Option
          isActive={optionSelected === "Sim"}
          onPress={() => handleOptionClick("Sim")}
        >
          <CircleIcon color={myTheme.COLORS.GREEN_DARK} />
          <Label>Sim</Label>
        </Option>

        <Option
          isActive={optionSelected === "Não"}
          isDanger
          onPress={() => handleOptionClick("Não")}
        >
          <CircleIcon color={myTheme.COLORS.RED_DARK} />
          <Label>Não</Label>
        </Option>
      </Row>
    </Container>
  );
}
