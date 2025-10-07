import Banner from "~/components/Banner";
import ProductList from "~/components/ProductList";
import type { Product } from "~/types/product";

export default function HomePage({ products }: { products: Product[] }) {
  return <div className="p-4 flex flex-col gap-4 justify-center items-center">
    <Banner title={"Welcome to the AR Store!"} description={"Your one-stop shop for unique products."} />
    <ProductList products={products} />
  </div>;
}