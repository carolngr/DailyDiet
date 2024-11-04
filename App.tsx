import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import theme from "@theme/index";
import { Loading } from "@components/Loading";

import Home from "@screens/Home";
import Estatisticas from "@screens/Estatisticas";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" translucent />

      {fontsLoaded ? <Estatisticas /> : <Loading />}
    </ThemeProvider>
  );
}
