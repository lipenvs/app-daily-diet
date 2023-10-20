import { Home } from "@/screens/Home";
import { myTheme } from "@/theme";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Routes } from "@/routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={myTheme}>
      <StatusBar style="auto" />
      {fontsLoaded ? <Routes /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
