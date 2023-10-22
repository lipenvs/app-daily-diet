import { useState } from "react";
import { Input } from "@/components/Input";
import { Container, Content, Row } from "./styles";
import { Button } from "@/components/Button";
import { Radio, RadioOptions } from "@/components/Radio";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export type MealData = {
  name: string;
  selectedOption: RadioOptions;
  description: string;
  date: string;
  time: string;
};

export function NewMeal() {
  const [mealData, setMealData] = useState<MealData>({
    name: "",
    selectedOption: "Não",
    description: "",
    date: "",
    time: "",
  });

  const navigation = useNavigation();

  function handleOptionClick(value: RadioOptions) {
    setMealData({ ...mealData, selectedOption: value });
  }

  async function saveMeal() {
    if (
      mealData.name &&
      mealData.description &&
      mealData.date &&
      mealData.time
    ) {
      try {
        const mealDataString = JSON.stringify(mealData);

        await AsyncStorage.setItem("@dailyDiet:newMealData", mealDataString);

        if (mealData.selectedOption === "Sim") {
          navigation.navigate("feedbackContinueAssim");
        } else {
          navigation.navigate("feedbackQuePena");
        }
      } catch (error) {
        Alert.alert("Erro", "Ocorreu um erro ao salvar os dados");
      }
    } else {
      Alert.alert("Erro", "Todos os campos são obrigatórios");
    }
  }

  return (
    <Container>
      <Content showsVerticalScrollIndicator={false}>
        <Row>
          <Input
            label="Nome"
            onChangeText={(text) => setMealData({ ...mealData, name: text })}
          />
        </Row>

        <Row>
          <Input
            label="Descrição"
            multiline
            numberOfLines={4}
            style={{ textAlignVertical: "top" }}
            onChangeText={(text) =>
              setMealData({ ...mealData, description: text })
            }
          />
        </Row>

        <Row>
          <Input
            label="Data"
            onChangeText={(text) => setMealData({ ...mealData, date: text })}
          />

          <Input
            label="Hora"
            onChangeText={(text) => setMealData({ ...mealData, time: text })}
          />
        </Row>

        <Radio
          optionSelected={mealData.selectedOption}
          handleOptionClick={handleOptionClick}
        />
      </Content>

      <Button label="Cadastrar refeição" onPress={saveMeal} />
    </Container>
  );
}
