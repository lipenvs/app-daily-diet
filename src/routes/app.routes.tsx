import { Header } from "@/components/Header";
import { EditMeal } from "@/screens/EditMeal";
import { FeedbackContinueAssim } from "@/screens/FeedbackContinueAssim";
import { FeedbackQuePena } from "@/screens/FeedbackQuePena";
import { Home } from "@/screens/Home";
import { Meal } from "@/screens/Meal";
import { NewMeal } from "@/screens/NewMeal";
import { Statistics } from "@/screens/Statistics";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator>
      <Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="feedbackContinueAssim"
        component={FeedbackContinueAssim}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="feedbackQuePena"
        component={FeedbackQuePena}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="statistics"
        component={Statistics}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="editMeal"
        component={EditMeal}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: theme.COLORS.GRAY_500 },
          headerTitleAlign: "center",
          headerTitle: () => <Header title="Editar refeição" />,
        }}
      />

      <Screen
        name="meal"
        component={Meal}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: theme.COLORS.GREEN_LIGHT },
          headerTitleAlign: "center",
          headerTitle: () => <Header title="Refeição" />,
        }}
      />

      <Screen
        name="newMeal"
        component={NewMeal}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: theme.COLORS.GRAY_500 },
          headerTitleAlign: "center",
          headerTitle: () => <Header title="Nova refeição" />,
        }}
      />
    </Navigator>
  );
}
