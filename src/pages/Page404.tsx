import { NavLink } from "react-router-dom";

export const Page404 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="p-6 text-6xl">404</p>
      <p className="text-2xl">
        Please <NavLink to="/" className="underline">return to the site</NavLink>
      </p>
    </div>
  );
};
