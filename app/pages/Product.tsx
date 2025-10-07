import type { Product } from "~/types/product";

export default function ProductPage({ product }: { product: Product}) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img src={product.image} alt={product.title} className="w-128 h-128 object-contain mb-4 md:mb-0 md:mr-6" />
        <div className="flex flex-col p-4">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-lg font-semibold mb-2">Price: <span className="text-red-500">${product.price}</span></p>
          <p className="text-sm text-gray-600">Category: {product.category}</p>
          <p className="text-sm text-gray-600">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        </div>
      </div>
    </div>
  );
}