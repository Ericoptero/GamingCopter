import { ThemeProvider } from "styled-components";
import { Footer } from "./components/Footer";

import { GamesTable } from "./components/GamesTable";
import { Header } from "./components/Header";

import { GlobalStyle } from "./globalStyle";
import { theme } from "./theme";

export function App() {
  const actualTheme = 'dark';

  return (
    <ThemeProvider theme={ theme[actualTheme] }>
      <GlobalStyle />

      <Header />
      <main>
        <GamesTable />
      </main>
      <Footer />
    </ThemeProvider>
  )
}