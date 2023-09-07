import { Home } from "@/screens/Home";
import { myTheme } from "@/theme";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <Home />
    </ThemeProvider>
  );
}
