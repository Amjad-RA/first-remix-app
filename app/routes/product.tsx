import ProductPage from "~/pages/Product";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Product Page" },
    { name: "description", content: "Product Page: My First Remix App" },
  ];
}

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs & { params: { id: string } }) {
  //TODO: move to env file and use proper API service
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();
  return product;
}

export function HydrateFallback() {
  return <div className="p-4 justify-center items-center w-fit m-auto h-2/3 flex">
    <h1 className="text-3xl font-bold animate-ping">Loading...</h1>
  </div>;
}

export default function Product({ loaderData } : Route.ComponentProps) {
  return <ProductPage product={loaderData} />;
}
