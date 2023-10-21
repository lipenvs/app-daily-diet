import { Header } from "@/components/Header";
import { EditarRefeicao } from "@/screens/EditarRefeicao";
import { Home } from "@/screens/Home";
import { Meal } from "@/screens/Meal";
import { NovaRefeicao } from "@/screens/NovaRefeicao";
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
        name="editarRefeicao"
        component={EditarRefeicao}
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
        name="novaRefeicao"
        component={NovaRefeicao}
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
