import type { Route } from "./+types/home";
import AboutUsPage from "~/pages/AboutUs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Page" },
    { name: "description", content: "About Page: My First Remix App" },
  ];
}

export default function About() {
  return <AboutUsPage />;
}
