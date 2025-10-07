import HomePage from "~/pages/Home";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home Page" },
    { name: "description", content: "Home Page: My First Remix App" },
  ];
}

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  //TODO: move to env file and use proper API service
  const res = await fetch(`https://fakestoreapi.com/products`);
  const products = await res.json();
  return products;
}

export function HydrateFallback() {
  return <div className="p-4 justify-center items-center w-fit m-auto h-2/3 flex">
    <h1 className="text-3xl font-bold animate-ping">Loading...</h1>
  </div>;
}

export default function Home({ loaderData } : Route.ComponentProps) {
  return <HomePage products={loaderData ?? []}/>;
}
