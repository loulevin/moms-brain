import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
       
        <Header />
        <main>
          <Outlet />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
