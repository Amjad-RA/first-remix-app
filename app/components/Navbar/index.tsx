import { NavLink } from "react-router";
export default function Navbar() {
  return (
    <header className="flex flex-col gap-9">
      <nav className="bg-gray-200 p-4 border rounded flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <NavLink to="/">AR Store</NavLink>
        </h1>
        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive}) =>
                [isActive ? "font-bold" : ""].join(" ")
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) =>
                [isActive ? "font-bold" : ""].join(" ")
              }>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) =>
                [isActive ? "font-bold" : ""].join(" ")
              }>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) =>
                [isActive ? "font-bold" : ""].join(" ")
              }>Dashboard</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
