import { GamesTable } from "./components/GamesTable";
import { Header } from "./components/Header";
import { GlobalStyle } from "./globalStyle";

export function App() {
  return (
    <>
      <GlobalStyle />
      
      <Header />
      <main>
        <div>
          Preferred Game
        </div>
        
        <GamesTable />
      </main>
      <footer>GamingCopter 2022.</footer>
    </>
  )
}