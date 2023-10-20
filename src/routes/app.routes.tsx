import { Header } from "@/components/Header";
import { NovaRefeicao } from "@/screens/NovaRefeicao";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator>
      <Screen
        name="login"
        component={NovaRefeicao}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: theme.COLORS.GRAY_500 },
          headerTitle: () => <Header title="Nova refeição" />,
        }}
      />
    </Navigator>
  );
}
