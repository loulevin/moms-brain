import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <main className="p-3">
          <Outlet />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
