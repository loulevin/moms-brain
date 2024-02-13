import { Nav } from "./Nav";
import { ModeToggle } from "./mode-toggle";

export const Header = () => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl">Moms Brain</h1>  
        <ModeToggle />
      </div>
    
      <Nav />
    </>
  );
};
