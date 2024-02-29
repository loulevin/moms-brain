import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { ThemeProvider } from "./components/theme-provider";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <div className="flex ">
          <Nav />
          <main className="p-3">
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
