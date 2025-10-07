import { NavLink } from "react-router";
export default function Navbar() {
  return (
    <header className="flex flex-col gap-9">
    <nav className="bg-gray-200 p-4 border rounded flex justify-between items-center">
      <h1 className="text-xl font-bold">AR Store</h1>
      <ul className="flex gap-4">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
    </header>
  );
}