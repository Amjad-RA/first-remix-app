import HomePage from "~/pages/Home";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home Page" },
    { name: "description", content: "Home Page: My First Remix App" },
  ];
}

export default function Home() {
  return <HomePage />;
}
