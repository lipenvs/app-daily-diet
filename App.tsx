import { Home } from "@/screens/Home";
import { myTheme } from "@/theme";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { ActivityIndicator } from "react-native";
import { Statistics } from "@/screens/Statistics";
import { StatusBar } from "expo-status-bar";
import { NewMeal } from "@/screens/NewMeal";
import { CreateRegisterMessage } from "@/screens/CreateRegisterMessage";
import { QuePena } from "@/screens/QuePena";
import { ContinueAssim } from "@/screens/ContinueAssim";

export default function App() {
  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={myTheme}>
      <StatusBar style="auto" />
      {fontsLoaded ? <ContinueAssim /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
