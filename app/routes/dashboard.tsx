import type { Route } from "./+types/home";
import Dashboard from "~/pages/Dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard Page" },
    { name: "description", content: "Dashboard Page: My First Remix App" },
  ];
}

export default function DashboardRoute() {
  return <Dashboard />;
}
