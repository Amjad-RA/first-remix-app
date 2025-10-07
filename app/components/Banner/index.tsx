export default function Banner({ title, description }: { title: string; description: string }) {
  return (
    <div className="w-full text-black p-4 py-12 rounded-lg text-center animate-pulse bg-gradient-to-r from-white-200 via-gray-300 to-white-500">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
}