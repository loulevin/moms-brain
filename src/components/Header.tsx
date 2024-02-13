import { Nav } from "./Nav";
import { ModeToggle } from "./mode-toggle";

export const Header = () => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl p-3">Moms Brain</h1>
        <div className="p-3">
          <ModeToggle />
        </div>
      </div>

      <Nav />
    </>
  );
};
