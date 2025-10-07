import { getProducts } from "mock-data/products";
import ProductList from "~/components/ProductList";
import type { Route } from "../+types/root";

export default function HomePage({ products }) {
  return <div className="p-4 flex flex-col gap-4 justify-center items-center">
    <h1 className="text-3xl font-bold">Welcome to the AR Store</h1>
    <p className="text-lg">Your one-stop shop for Uniq Products</p>
    <ProductList products={products} />
  </div>;
}