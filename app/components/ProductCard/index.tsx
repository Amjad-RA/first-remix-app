export default function ProductCard({ product }: { product: { id: number; title: string; price: number; description: string; category: string; image: string; rating: { rate: number; count: number } } }) {
  return (
    <div className="border p-4 flex flex-col items-center justify-center">
      <div className="mb-4 flex justify-center items-center h-100">
        <img src={product.image} alt={product.title} className="w-40"/>
      </div>
      <h2>{product.title}</h2>
      <div className="text-sm text-gray-600 mb-2">{product.category}</div>
      <div className="mt-auto items-start">
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
      </div>
    </div>
  );
}