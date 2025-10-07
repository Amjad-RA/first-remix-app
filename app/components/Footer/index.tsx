export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="p-4 text-center bg-gray-200 border rounded mt-8">
      <p>© {year} AR Store</p>
    </footer>
  );
}