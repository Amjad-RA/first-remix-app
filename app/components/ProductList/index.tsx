import ProductCard from "../ProductCard";

export default function ProductList({ products }: { products: Array<{ id: number; title: string; price: number; description: string; category: string; image: string; rating: { rate: number; count: number } }> }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}