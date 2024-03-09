import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="w-[10rem]">
      <div className="flex flex-col gap-2 p-4 w-full md:w-auto h-dvh">
        <NavLink to="/" className="[&.active]:text-gray-600">Home</NavLink>
        <NavLink to="/calender" className="[&.active]:text-gray-600">
          Calender
        </NavLink>
        <NavLink to="/tabs" className="[&.active]:text-gray-600">Tabs</NavLink>
        <NavLink to="/test" className="[&.active]:text-gray-600">Test</NavLink>
      </div>
    </nav>
  );
};
